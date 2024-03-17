import UIKit
import WebKit

class ViewController: UIViewController, WKUIDelegate {
    
    var webView: WKWebView!
    
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
        }
    }
}
