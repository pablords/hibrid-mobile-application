package com.example.hibrid_mobile_application;

import androidx.appcompat.app.AppCompatActivity;

import android.app.ProgressDialog;
import android.graphics.Bitmap;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import com.example.hibrid_mobile_application.R;

import io.github.cdimascio.dotenv.Dotenv;


public class MainActivity extends AppCompatActivity {

    private WebView webView;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getSupportActionBar().hide();
        setContentView(R.layout.activity_main);
        webView = findViewById(R.id.webview);
        ProgressDialog progressDialog = new ProgressDialog(this, R.style.VivoDialogStyle);
        webView.setWebViewClient(new WebViewClient(){

            @Override
            public void onPageStarted(WebView view, String url, Bitmap favicon){
                super.onPageStarted(view, url, favicon);
                webView.setVisibility(View.GONE);
                progressDialog.setTitle("Aguarde");
                progressDialog.setMessage("Carregando..");
                progressDialog.show();
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                super.onPageFinished(view, url);
                progressDialog.hide();
                webView.setVisibility(View.VISIBLE);

            }
        });

        webView.getSettings().setJavaScriptEnabled(true);
        webView.getSettings().setDatabaseEnabled(true);
        webView.getSettings().setDomStorageEnabled(true);
        webView.addJavascriptInterface(new BridgeJavascript(this), "webviewBridge");


        Dotenv dotenv = Dotenv.configure()
        .directory("./assets")
        .filename("env").load();
        webView.loadUrl(dotenv.get("DEV_HOST"));

    }



    @Override
    public void onBackPressed(){
        if(webView.canGoBack()){
            webView.goBack();
        }else{
            super.onBackPressed();
        }
    }
}
