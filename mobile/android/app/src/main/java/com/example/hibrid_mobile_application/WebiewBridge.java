package com.example.hibrid_mobile_application;

import android.Manifest;
import android.app.Activity;
import android.app.ProgressDialog;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.provider.MediaStore;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;

import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;

public class WebiewBridge {
    Context bridgeContext;
    static final String TAG = "JSinterface";
    ProgressDialog progressDialog;
    private WebView webView;

    WebiewBridge(Context context){
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

    @JavascriptInterface
    public String checkCameraHardware() throws Exception {
        if (ContextCompat.checkSelfPermission(this.bridgeContext, Manifest.permission.CAMERA)
                != PackageManager.PERMISSION_GRANTED)
        {
            // Permission is not granted
            Log.d("checkCameraPermissions", "No Camera Permissions");
            ActivityCompat.requestPermissions((Activity) this.bridgeContext,
                    new String[] { Manifest.permission.CAMERA },
                    100);
        }
        return "true";

    }

    @JavascriptInterface
    public void openCamera() throws Exception{
        Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        this.bridgeContext.startActivity(intent);
    }


}
