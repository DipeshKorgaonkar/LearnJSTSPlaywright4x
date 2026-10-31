let browser = "Brave"

switch (browser){
    case "chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium Project!");
        break;
    case "Firefox":
        console.log("Mozilla Project!");
        break;
    case "Safari":
        console.log("Apple Browser - uses JavaScriptCore engine");
        break;
    default:
        console.log("Unknow Browser - Manual Testing needed"); 
    }   