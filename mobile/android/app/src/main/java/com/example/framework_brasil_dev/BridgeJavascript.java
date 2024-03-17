package com.example.framework_brasil_dev;

import android.app.ProgressDialog;
import android.content.Context;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;

public class BridgeJavascript {
    Context bridgeContext;
    static final String TAG = "JSinterface";
    ProgressDialog progressDialog;
    private WebView webView;

    BridgeJavascript(Context c){
        bridgeContext =c;
    }


    @JavascriptInterface
    public void loading(String state) throws Exception{
        Log.d(TAG + "- loading", state);
        if(state.equals("true")){
            this.progressDialog = new ProgressDialog(this.bridgeContext, R.style.VivoDialogStyle);
            progressDialog.setTitle("Aguarde");
            progressDialog.setMessage("Carregando..");
            progressDialog.show();
        }else if(state.equals("false")){
            this.progressDialog.hide();
        }

    }

}
