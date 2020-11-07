// @ts-ignore TODO Type for PluginBase
import PluginBase from 'terminal-in-react/lib/js/components/Plugin';

export class FileSystem extends PluginBase {
  static displayName = 'FileSystem';
  static version = '0.0.1';

  api: any
  config: any

  // TODO Types for API and Config
  constructor(api: any, config: any) {
    super(api, config);
    this.api = api
    this.config = config
    this.api.setPromptPrefix("/home/ryan/")
  }
}