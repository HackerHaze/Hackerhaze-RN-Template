#import "AppDelegate.h"
#import <Firebase.h>

#import <AppCenterReactNativeShared/AppCenterReactNativeShared.h>
#import <AppCenterReactNative.h>

#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"HHRNTemplate";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
  NSString *firebaseFilePath = [[NSBundle mainBundle] pathForResource:@"GoogleService-Info" ofType:@"plist"];
  NSDictionary *firebaseConfig = [NSDictionary dictionaryWithContentsOfFile:firebaseFilePath];
  NSString *clientID = firebaseConfig[@"CLIENT_ID"];

  if (![clientID isEqualToString:@"{Your Client ID}"]) {
//    [FIRApp configure];
  }

  NSString *appCenterFilePath = [[NSBundle mainBundle] pathForResource:@"AppCenterConfig" ofType:@"plist"];
  NSDictionary *appCenterConfig = [NSDictionary dictionaryWithContentsOfFile:appCenterFilePath];
  NSString *appSecret = appCenterConfig[@"AppSecret"];

  if (![appSecret isEqualToString:@"{Your App Secret}"]) {
//    [AppCenterReactNativeShared setStartAutomatically:YES];
//    [AppCenterReactNativeShared setAppSecret:appSecret];
//    [AppCenterReactNative register];
    // [AppCenterReactNativeAnalytics registerWithInitiallyEnabled:true];
    // [AppCenterReactNativeCrashes registerWithAutomaticProcessing];
  }
  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
