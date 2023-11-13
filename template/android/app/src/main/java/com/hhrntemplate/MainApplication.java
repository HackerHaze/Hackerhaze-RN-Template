package com.hhrntemplate;

import android.app.Application;
import com.facebook.react.PackageList;
import com.reactnativenavigation.NavigationApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactNativeHost;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.facebook.soloader.SoLoader;
import java.util.List;
import android.util.Log;
import java.io.InputStream;
import org.json.JSONObject;
import com.microsoft.appcenter.AppCenter;
import com.microsoft.appcenter.analytics.Analytics;
import com.microsoft.appcenter.crashes.Crashes;
import com.microsoft.codepush.react.CodePush;

public class MainApplication extends NavigationApplication {

  private final ReactNativeHost mReactNativeHost =
      new NavigationReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());
          return packages;
        }
        @Override
        protected String getJSBundleFile() {
            return CodePush.getJSBundleFile();
        }
        @Override
        protected String getJSMainModuleName() {
          return "index";
        }

        @Override
        protected boolean isNewArchEnabled() {
          return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
        }

        @Override
        protected Boolean isHermesEnabled() {
          return BuildConfig.IS_HERMES_ENABLED;
        }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      // If you opted-in for the New Architecture, we load the native entry point for this app.
      DefaultNewArchitectureEntryPoint.load();
    }
    try {
      InputStream is = getAssets().open("appcenter-config.json");
      int size = is.available();
      byte[] buffer = new byte[size];
      is.read(buffer);
      is.close();

      String json = new String(buffer, "UTF-8");
      JSONObject jsonObject = new JSONObject(json);
      String appSecret = jsonObject.getString("app_secret");
      if (!appSecret.equals("{YOUR_APP_SECRET}")) {
        AppCenter.start(this, appSecret, Analytics.class, Crashes.class);
      }
    } catch (Exception ex) {
      ex.printStackTrace();
    }
    ReactNativeFlipper.initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
  }
}
