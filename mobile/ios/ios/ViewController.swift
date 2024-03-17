import UIKit
import WebKit
import os.log


class ViewController: UIViewController, WKUIDelegate, WKScriptMessageHandler {
    
    var webView: WKWebView!
    let log = OSLog(subsystem: "com.example.MyApp", category: "WebViewBridge")
    var loadingIndicator: UIActivityIndicatorView!

    
    override func loadView() {
        let webConfiguration = WKWebViewConfiguration()
        webView = WKWebView(frame: .zero, configuration: webConfiguration)
        webView.uiDelegate = self
        view = webView
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        let hoistIp: String? = ProcessInfo.processInfo.environment["DEV_HOST"]
        if hoistIp != nil{
            let url = URL(string: hoistIp!)
            let request = URLRequest(url: url!)
            webView.load(request)
            webView.configuration.userContentController.add(self, name: "openCamera")
            webView.configuration.userContentController.add(self, name: "setLoading")
        }
        
    }
    
    
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        os_log("userContentController", log: log, type: .info)
        if let body = message.body as? String {
           print("PostMeesage: \(body)")
        }
        
        switch(message.name){
            case "openCamera":
                openCamera()
                break
            case "setLoading":
                setLoading(show: message.body as! String)
            break
            default: break
        }
        
    }
    
    func openCamera() {
        let imagePicker = UIImagePickerController()
        imagePicker.sourceType = .camera
        imagePicker.allowsEditing = false
        present(imagePicker, animated: true, completion: nil)
    }
    
    func setLoading(show: String){
        
        if loadingIndicator == nil{
            loadingIndicator = UIActivityIndicatorView(style: .large)
            loadingIndicator.center = view.center
        }
        
        if loadingIndicator !== nil {
            if show == "true" {
                loadingIndicator.startAnimating()
                view.addSubview(loadingIndicator)
            }else if show == "false"{
                loadingIndicator.stopAnimating()
                view.addSubview(loadingIndicator)
            }
            return
        }

    }
}
