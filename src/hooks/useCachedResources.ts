import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState, useCallback } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          'KLMN': require('../assets/fonts/KLMNFP2004.ttf'),
          'TheDolbak': require('../assets/fonts/TheDolbak-Brush.ttf'),
          'Etna': require('../assets/fonts/etna-free-font.otf'),
          'Narrow': require('../assets/fonts/3270Narrow.pfb.ttf'),
          'airbnb-bold': require('../assets/fonts/AirbnbCereal_W_Bd.otf'),
          'airbnb-regular': require('../assets/fonts/AirbnbCereal_W_Bk.otf'),
          'airbnb-black': require('../assets/fonts/AirbnbCereal_W_Blk.otf'),
          'airbnb-light': require('../assets/fonts/AirbnbCereal_W_Lt.otf'),
          'airbnb-medium': require('../assets/fonts/AirbnbCereal_W_Md.otf'),
          'airbnb-xtrabold': require('../assets/fonts/AirbnbCereal_W_XBd.otf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
