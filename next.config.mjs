// @ts-check
import { withTamagui }  from '@tamagui/next-plugin'

export default (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    
  }

  const tamaguiPlugin = withTamagui({
    config: './tamagui.config.ts',
    components: ['tamagui'],
    outputCSS: process.env.NODE_ENV === 'production' ? './public/tamagui.css' : null,
    disableExtraction: process.env.NODE_ENV === 'development'
  })

  return {
    ...nextConfig,
    ...tamaguiPlugin(nextConfig)
  }
}