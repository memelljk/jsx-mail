import axios from '@/app/utils/axios';
import PricingContent from './content';

export default async function Pricing() {
  const {
    data: { moneyScale, pricing, freeBalance },
  } = await axios.get('/user/price');

  return (
    <PricingContent
      moneyScale={moneyScale}
      pricing={pricing}
      freeBalance={freeBalance}
    />
  );
}
