package com.example.hibrid_mobile_application;

import android.app.ProgressDialog;
import android.content.Context;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;

import com.example.hibrid_mobile_application.R;

public class BridgeJavascript {
    Context bridgeContext;
    static final String TAG = "JSinterface";
    ProgressDialog progressDialog;
    private WebView webView;

    BridgeJavascript(Context context){
        bridgeContext =context;
    }


    @JavascriptInterface
    public void setLoading(String show) throws Exception{
        Log.d(TAG + "- loading", show);
        if(show.equals("true")){
            this.progressDialog = new ProgressDialog(this.bridgeContext, R.style.VivoDialogStyle);
            progressDialog.setTitle("Aguarde");
            progressDialog.setMessage("Carregando..");
            progressDialog.show();
        }else if(show.equals("false")){
            this.progressDialog.hide();
        }

    }

}
