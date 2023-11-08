#import "AppDelegate.h"
#import <Firebase.h>
#import <ReactNativeNavigation/ReactNativeNavigation.h>

#import <AppCenterReactNativeShared/AppCenterReactNativeShared.h>
#import <AppCenterReactNative.h>

#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSString *firebaseFilePath = [[NSBundle mainBundle] pathForResource:@"GoogleService-Info" ofType:@"plist"];
  NSDictionary *firebaseConfig = [NSDictionary dictionaryWithContentsOfFile:firebaseFilePath];
  NSString *clientID = firebaseConfig[@"CLIENT_ID"];

  if (![clientID isEqualToString:@"{Your Client ID}"]) {
    [FIRApp configure];
  }

  NSString *appCenterFilePath = [[NSBundle mainBundle] pathForResource:@"AppCenterConfig" ofType:@"plist"];
  NSDictionary *appCenterConfig = [NSDictionary dictionaryWithContentsOfFile:appCenterFilePath];
  NSString *appSecret = appCenterConfig[@"AppSecret"];

  if (![appSecret isEqualToString:@"{Your App Secret}"]) {
    [AppCenterReactNativeShared setStartAutomatically:YES];
    [AppCenterReactNativeShared setAppSecret:appSecret];
    [AppCenterReactNative register];
    // [AppCenterReactNativeAnalytics registerWithInitiallyEnabled:true];
    // [AppCenterReactNativeCrashes registerWithAutomaticProcessing];
  }

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
