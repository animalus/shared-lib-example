# shared-lib-example

## Problems

### android

`gulp dev:android` results in the following.

```
WARNING in Entry point 'side-drawer-directives' contains deep imports into '/home/ken/dev/animalus/test/shared-lib-example/node_modules/@nativescript/angular/element-registry'. This is probably not a problem, but may cause the compilation of entry points to be out of order.

ERROR in The target entry-point "side-drawer-directives" has missing dependencies:
 - ./..

Webpack compilation complete. Watching for file changes.
Webpack build done!
Project successfully prepared (android)
Successfully transferred runtime.js on device emulator-5554.
Restarting application on device emulator-5554...
JS: HMR: Hot Module Replacement Enabled. Waiting for signal.
System.err: An uncaught Exception occurred on "main" thread.
System.err: Unable to start activity ComponentInfo{com.animalus.sharedLibExample/com.tns.NativeScriptActivity}: com.tns.NativeScriptException: Calling js method onCreate failed
System.err: Error: Main entry is missing. App cannot be started. Verify app bootstrap.
System.err:
System.err: StackTrace:
System.err: java.lang.RuntimeException: Unable to start activity ComponentInfo{com.animalus.sharedLibExample/com.tns.NativeScriptActivity}: com.tns.NativeScriptException: Calling js method onCreate failed
System.err: Error: Main entry is missing. App cannot be started. Verify app bootstrap.
System.err: 	at android.app.ActivityThread.performLaunchActivity(ActivityThread.java:2913)
System.err: 	at android.app.ActivityThread.handleLaunchActivity(ActivityThread.java:3048)
System.err: 	at android.app.servertransaction.LaunchActivityItem.execute(LaunchActivityItem.java:78)
System.err: 	at android.app.servertransaction.TransactionExecutor.executeCallbacks(TransactionExecutor.java:108)
System.err: 	at android.app.servertransaction.TransactionExecutor.execute(TransactionExecutor.java:68)
System.err: 	at android.app.ActivityThread$H.handleMessage(ActivityThread.java:1808)
System.err: 	at android.os.Handler.dispatchMessage(Handler.java:106)
System.err: 	at android.os.Looper.loop(Looper.java:193)
System.err: 	at android.app.ActivityThread.main(ActivityThread.java:6669)
System.err: 	at java.lang.reflect.Method.invoke(Native Method)
System.err: 	at com.android.internal.os.RuntimeInit$MethodAndArgsCaller.run(RuntimeInit.java:493)
System.err: 	at com.android.internal.os.ZygoteInit.main(ZygoteInit.java:858)
System.err: Caused by: com.tns.NativeScriptException: Calling js method onCreate failed
System.err: Error: Main entry is missing. App cannot be started. Verify app bootstrap.
System.err: 	at com.tns.Runtime.callJSMethodNative(Native Method)
System.err: 	at com.tns.Runtime.dispatchCallJSMethodNative(Runtime.java:1286)
System.err: 	at com.tns.Runtime.callJSMethodImpl(Runtime.java:1173)
System.err: 	at com.tns.Runtime.callJSMethod(Runtime.java:1160)
System.err: 	at com.tns.Runtime.callJSMethod(Runtime.java:1138)
System.err: 	at com.tns.Runtime.callJSMethod(Runtime.java:1134)
System.err: 	at com.tns.NativeScriptActivity.onCreate(NativeScriptActivity.java:19)
System.err: 	at android.app.Activity.performCreate(Activity.java:7136)
System.err: 	at android.app.Activity.performCreate(Activity.java:7127)
System.err: 	at android.app.Instrumentation.callActivityOnCreate(Instrumentation.java:1271)
System.err: 	at android.app.ActivityThread.performLaunchActivity(ActivityThread.java:2893)
System.err: 	... 11 more
```
