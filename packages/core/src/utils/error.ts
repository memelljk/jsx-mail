import { readGlobalVariable } from './global';

interface IError {
  name: string;
  message: string;
  solutions?: string[];
}

export const ERRORS: IError[] = [
  {
    name: 'unknown',
    message:
      'This is an unknown error, please open an issue at https://github.com/Theryston/jsx-mail/issues reporting the entire process and its flow until reaching this error',
  },
  {
    name: 'no_template_folder',
    message:
      'You should create a folder called `templates` in your email application, create a .tsx/.jsx file in the `templates` folder and export some component as default',
  },
  {
    name: 'compile_files',
    message:
      "I didn't find any file with the extension .tsx/.jsx/.js/.ts in your mail app, please create one and export a component as default",
  },
  {
    name: 'compilation_error',
    message: 'There was an error trying to compile the template',
  },
  {
    name: 'export_a_component_as_default',
    message:
      'You must export by default a function that returns a jsx component',
  },
  {
    name: 'fails_to_run_template_in_prepare',
    message:
      'The prepare process tried to run your template, but received an error',
  },
  {
    name: 'not_supported_tag',
    message:
      "You used a tag not supported by email clients so it doesn't exist in jsx mail",
  },
  {
    name: 'not_supported_style',
    message:
      'You used css which is not supported by some email clients so it is not implemented in JSX Mail',
  },
  {
    name: 'not_supported_style_value',
    message:
      'The value you used in your css is not supported by some email clients',
  },
  {
    name: 'promise_not_allowed',
    message:
      'No component can return a promise, please do all the asynchronous things you have to do directly in "onRender"',
  },
  {
    name: 'not_supported_props',
    message: 'You used props that are not supported by this tag',
  },
  {
    name: 'no_template_name',
    message: 'You must enter a template name',
  },
  {
    name: 'on_render_error',
    message: 'Error when executing onRender function',
  },
  {
    name: 'prop_align_not_supported',
    message: 'Only a div with props section can have props alignX and alignY',
  },
  {
    name: 'prop_padding_not_supported',
    message: 'Only a div with props container can have prop padding',
  },
  {
    name: 'src_is_required',
    message: 'You must enter a src for the img tag',
  },
  {
    name: 'alt_is_required',
    message: 'You must enter a alt for the img tag',
  },
  {
    name: 'image_not_found',
    message: 'The image you are trying to use was not found',
  },
  {
    name: 'on_image_as_props',
    message:
      'You passed an image as props in your template, this is not allowed',
  },
  {
    name: 'href_is_required',
    message:
      'You must enter a href for the a/button tag and it must be a string that starts with http or mailto:',
  },
  {
    name: 'invalid_h_tag',
    message: 'You used an invalid h tag. It must be h1, h2, h3, h4, h5 or h6',
  },
  {
    name: 'invalid_storage_type',
    message: 'Invalid storage type',
  },
  {
    name: 'invalid_file_type',
    message: 'Invalid file type',
  },
  {
    name: 'upload_error',
    message: 'Error uploading image',
  },
  {
    name: 'fails_to_prepare_image',
    message: 'Error when optimizing or uploading image',
  },
  {
    name: 'aws_access_key_id_not_found',
    message: 'When using aws s3 storage, you must enter awsAccessKeyId',
  },
  {
    name: 'aws_secret_access_key_not_found',
    message: 'When using aws s3 storage, you must enter awsSecretAccessKey',
  },
  {
    name: 'aws_bucket_not_found',
    message: 'When using aws s3 storage, you must enter awsBucket',
  },
  {
    name: 'aws_region_not_found',
    message: 'When using aws s3 storage, you must enter awsRegion',
  },
  {
    name: 'no_built_dir',
    message: 'You must to run the prepare command before the render',
  },
  {
    name: 'built_dir_is_not_directory',
    message: 'There is a problem with the builtDirPath you entered',
  },
  {
    name: 'undefined_child',
    message: 'Some child is undefined. Please check your template',
    solutions: [
      'Maybe you just forgot to return something in your onRender function',
      'Maybe you forgot to return something in your template function',
      'Maybe you forgot to pass a prop to the jsx mail render function',
      'Maybe you forgot to pass a prop to a component',
    ],
  },
  {
    name: 'template_not_found',
    message: 'Template not found',
    solutions: [
      'Maybe you did not create a template with the name you passed',
      'Maybe you did not run the prepare command after creating the template',
    ],
  },
  {
    name: 'font_invalid_href',
    message:
      'You must pass a valid href to the font tag. It must be a string that starts with http',
  },
  {
    name: 'invalid_container_children',
    message:
      'A div with the props container must have only div sections as children',
  },
  {
    name: 'prop_section_not_supported',
    message: 'A div cannot be a container and section at the same time',
  },
  {
    name: 'prop_flex_not_supported',
    message: 'Only one section div can be flex',
  },
];

export default class CoreError implements IError {
  message: string;
  name: string;
  solutions?: string[];
  fileContext?: string;
  customJson?: any;

  constructor(name: string, customJson?: any) {
    const hasAnotherError = getCoreErrorIntoCustomJson(customJson);

    if (hasAnotherError) {
      this.message = hasAnotherError.message;
      this.name = hasAnotherError.name;
      this.solutions = hasAnotherError.solutions;
      this.customJson = hasAnotherError.customJson;
      this.fileContext = hasAnotherError.fileContext;
      return;
    }

    let errorCustom = ERRORS.find((e) => e.name === name);

    const error: IError = (errorCustom ? errorCustom : ERRORS[0]) as IError;

    this.message = error.message;
    this.name = error.name;
    this.customJson = customJson;

    if (error.solutions) {
      this.solutions = error.solutions;
    }

    const globalFileContext = readGlobalVariable('fileContext');

    if (globalFileContext) {
      this.fileContext = globalFileContext[globalFileContext.length - 1]?.id;
    }
  }
}

export const getCoreErrorIntoCustomJson = (
  customJson?: any,
): CoreError | null => {
  if (!customJson) return null;

  if (customJson instanceof CoreError) return customJson;

  if (customJson.customJson)
    return getCoreErrorIntoCustomJson(customJson.customJson);

  return null;
};
