import Icon from 'react-native-vector-icons/MaterialIcons';
import {SFSymbols} from '@assets/symbols/SFSymbols';
import {Colors, PlatformColorsAndroid} from '@core/theme/colors';
import {isIos} from '@core/theme/commonConsts';

export function getPlatformTabsIcon(
  sfSymbol?: SFSymbols,
  sfSelectedSymbol?: SFSymbols,
  androidIcon?: string,
  androidSize?: number,
  androidColor?: Colors | PlatformColorsAndroid,
) {
  if (isIos) {
    return {
      sfSymbol,
      sfSelectedSymbol,
    };
  } else if (androidIcon) {
    return {
      icon: Icon.getImageSourceSync(androidIcon, androidSize, androidColor),
    };
  } else {
    return undefined;
  }
}
