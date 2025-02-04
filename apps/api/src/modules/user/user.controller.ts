import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Request,
  Req,
  Query,
  Headers,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserService } from './services/create-user.service';
import {
  AuthUserDto,
  CreateCheckoutDto,
  CreateSecurityCodeDto,
  CreateUserDto,
  ResetPasswordDto,
  UseSecurityCodeDto,
} from './user.dto';
import { Permissions } from 'src/auth/permissions.decorator';
import { PERMISSIONS } from 'src/auth/permissions';
import { CreateSecurityCodeService } from './services/create-security-code.service';
import { UseSecurityCodeService } from './services/use-security-code.service';
import { ValidateEmailService } from './services/validate-email.service';
import { AuthUserService } from './services/auth-user.service';
import { ResetPasswordService } from './services/reset-password.service';
import {
  FREE_BALANCE,
  MONEY_SCALE,
  PRICE_PER_MESSAGE,
  STORAGE_GB_PRICE,
} from 'src/utils/constants';
import { friendlyMoney } from 'src/utils/format-money';
import { GetFullBalanceService } from './services/get-full-balance.service';
import { ListTransactionsService } from './services/list-transactions.service';
import { CreateCheckoutService } from './services/create-checkout.service';
import { StripeService } from 'src/services/stripe.service';
import { HandleWebhookService } from './services/handle-webhook.service';
import { GetInsightsService } from './services/get-insights.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly createSecurityCodeService: CreateSecurityCodeService,
    private readonly useSecurityCodeService: UseSecurityCodeService,
    private readonly validateEmailService: ValidateEmailService,
    private readonly authUserService: AuthUserService,
    private readonly resetPasswordService: ResetPasswordService,
    private readonly getFullBalanceService: GetFullBalanceService,
    private readonly listTransactionsService: ListTransactionsService,
    private readonly createCheckoutService: CreateCheckoutService,
    private readonly stripeService: StripeService,
    private readonly handleWebhookService: HandleWebhookService,
    private readonly getInsightsService: GetInsightsService,
  ) {}

  @Post()
  createUser(@Body() data: CreateUserDto) {
    return this.createUserService.execute(data);
  }

  @Post('security-code')
  createSecurityCode(@Body() data: CreateSecurityCodeDto) {
    return this.createSecurityCodeService.execute(data);
  }

  @Post('security-code/use')
  useSecurityCode(@Body() data: UseSecurityCodeDto) {
    return this.useSecurityCodeService.execute(data);
  }

  @Put('validate-email')
  @Permissions([PERMISSIONS.SELF_EMAIL_VALIDATE.value])
  validateEmail(@Request() req) {
    return this.validateEmailService.execute(req.user.id, req.permissions);
  }

  @Post('auth')
  authUser(@Body() data: AuthUserDto) {
    return this.authUserService.execute(data);
  }

  @Post('reset-password')
  @Permissions([PERMISSIONS.SELF_RESET_PASSWORD.value])
  resetPassword(@Body() data: ResetPasswordDto, @Request() req) {
    return this.resetPasswordService.execute({
      ...data,
      userId: req.user.id,
      permissions: req.permissions,
    });
  }

  @Get('me')
  @Permissions([PERMISSIONS.SELF_GET.value])
  getMe(@Request() req) {
    return req.user;
  }

  @Get('balance')
  @Permissions([PERMISSIONS.SELF_GET_BALANCE.value])
  getBalance(@Request() req) {
    return this.getFullBalanceService.execute(req.user.id);
  }

  @Get('transactions')
  @Permissions([PERMISSIONS.SELF_LIST_TRANSACTIONS.value])
  listFiles(@Req() req, @Query() data: any) {
    return this.listTransactionsService.execute(
      {
        take: Number(data.take) || 10,
        page: Number(data.page) || 1,
      },
      req.user.id,
    );
  }

  @Post('checkout')
  @Permissions([PERMISSIONS.SELF_CREATE_CHECKOUT.value])
  createCheckout(@Request() req, @Body() data: CreateCheckoutDto) {
    return this.createCheckoutService.execute(data, req.user.id);
  }

  @Post('billing/webhook')
  validateBilling(@Headers('stripe-signature') signature: string, @Req() req) {
    const body = this.stripeService.stripe.webhooks.constructEvent(
      req.rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET,
    );

    return this.handleWebhookService.execute(body);
  }

  @Get('insights')
  @Permissions([PERMISSIONS.SELF_GET_INSIGHTS.value])
  getInsights(@Request() req) {
    return this.getInsightsService.execute(req.user.id);
  }

  @Get('price')
  price() {
    return {
      moneyScale: MONEY_SCALE,
      freeBalance: FREE_BALANCE,
      pricing: [
        {
          title: 'Emails',
          unit: '1000',
          unitName: 'emails',
          amount: 1000,
          step: 1000,
          maxValue: 1000000,
          price: PRICE_PER_MESSAGE * 1000,
          friendlyAmount: friendlyMoney(PRICE_PER_MESSAGE * 1000, true),
        },
        {
          title: 'Storage',
          unit: 'GB',
          unitName: 'GB',
          amount: 1,
          step: 1,
          maxValue: 1000,
          price: STORAGE_GB_PRICE,
          friendlyAmount: friendlyMoney(STORAGE_GB_PRICE, true),
        },
      ],
    };
  }
}
