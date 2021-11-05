import Content from "./Content"
const Projects=()=>{
    return <>
   <Content>
    <div className="card">
        <div className="card-body d-flex align-items-center mobile-projects">
            <div className="front-type mx-3"></div>Web Development Projects
            <div className="other-type mx-3"></div>Other Projects
        </div>
    </div>

    <div className="card my-2">
        <div className="card-body d-flex align-items-center justify-content-between back-front mobile-projects">
            <span className="text-dark w-50 me-3"><b><span className="alert alert-success sort-alert">#1</span> E commerce Web Site</b></span>
            <span className="text-dark"><i><b>Features</b>:Server Side Rendering,Json Web Token(backend auth-token api created by myself),Mobile Responsive design</i></span>
            <div className="d-flex mobile-projects">
            <div className="alert alert-primary mx-1"><span className="no-wrap"> Live Preview : <a href="https://eticaret-emin.vercel.app/"><b>DEMO</b></a></span>
            </div><div className="alert alert-warning mx-1 no-wrap"><span> Source Code : <a href="https://github.com/emintatli/Eticaret-Sitesi-NextJS-MongoDB"><b>Github</b></a></span></div>
        </div>
        </div>
    </div>

    <div className="card my-2">
        <div className="card-body d-flex align-items-center justify-content-between back-front mobile-projects">
            <span className="text-dark w-50 me-3"><b><span className="alert alert-success sort-alert">#2</span> EtherPAY Crypto Curreny Payment System</b></span>
            <span className="text-dark"><i><b>Features</b>:HttpOnly Cookie Auth (Server side cookie), QR code generation for user specific ethereum address,Ethereum address
generation for each session,session recovery if users connection closed and wants to rejoin the same session.Backend features
coded by myself.</i></span>
        <div className="d-flex mobile-projects">
            <div className="alert alert-primary mx-1"><span className="no-wrap"> Live Preview : <a href="https://ether-pay.herokuapp.com/demokullanici123"><b>DEMO</b></a></span>
            </div><div className="alert alert-warning mx-1 no-wrap"><span> Source Code : <a href="https://github.com/emintatli/EtherPay-Kripto-Odeme-Sistemi"><b>Github</b></a></span></div>
            </div>
        </div>
    </div>

    <div className="card my-2">
        <div className="card-body d-flex align-items-center justify-content-between back-front mobile-projects">
            <span className="text-dark w-50 me-3"><b><span className="alert alert-success sort-alert">#3</span>Web3 NFT Minter & Payment System</b></span>
            <span className="text-dark"><i><b>Features</b>: Metamask integration,multi wallet, changable NFT metadata (even after mint), changable contract.
            This web app allows you to sell your images or 3d models ad a NFT  on ethereum network.The minting process starts after the payment confirmation.
            </i></span>
        <div className="d-flex mobile-projects">
            <div className="alert alert-primary mx-1"><span className="no-wrap"> Live Preview : <a href="https://nft-minter-cyan.vercel.app/"><b>DEMO</b></a></span>
            </div><div className="alert alert-danger mx-1 no-wrap"><span> Source Code : <b>Commercial</b></span></div>
            </div>
        </div>
    </div>

    <div className="card my-2">
        <div className="card-body d-flex align-items-center justify-content-between back-front mobile-projects">
            <span className="text-dark w-50 me-3"><b><span className="alert alert-success sort-alert">#4</span>Baby Banana Token Wallet</b></span>
            <span className="text-dark"><i><b>Features</b>: Metamask integration,wallet creation,Token informations (contract interaction and API),Has its own cache,chart API,Claim rewards,Balance
            </i></span>
        <div className="d-flex mobile-projects">
            <div className="alert alert-primary mx-1"><span className="no-wrap"> Image Preview : <a href="https://ibb.co/bXGzr2q"><b>DEMO</b></a></span>
            </div><div className="alert alert-danger mx-1 no-wrap"><span> Source Code : <b>Commercial</b></span></div>
            </div>
        </div>
    </div>

    <div className="card my-2">
        <div className="card-body d-flex align-items-center justify-content-between back-front mobile-projects">
            <span className="text-dark w-50 me-3"><b><span className="alert alert-success sort-alert">#4</span>Masslink Backlink Bot Web</b></span>
            <span className="text-dark"><i><b>Features</b>: Progress tracker,Backlink list creator,2captcha API,Random information generator,Proxy,Server management,Log management
            This app allows you to share your backlinks* to another web sites automaticly.
            </i></span>
        <div className="d-flex mobile-projects">
            <div className="alert alert-primary mx-1"><span className="no-wrap"> Live Preview (password : 123) : <a href="https://master-linker.vercel.app/"><b>DEMO</b></a></span>
            </div><div className="alert alert-danger mx-1 no-wrap"><span> Source Code : <b>Commercial</b></span></div>
            </div>
        </div>
    </div>

    <div className="card my-2">
        <div className="card-body d-flex align-items-center justify-content-between back-front mobile-projects">
            <span className="text-dark w-50 me-3"><b><span className="alert alert-success sort-alert">#5</span> Chatting App</b></span>
            <span className="text-dark"><i><b>Features</b>:HttpOnly Cookie Auth (Server side cookie),Json Web Token(backend auth-token api created by myself),Realtime
chatting with SocketIO,saving all chatting data on MongoDB</i></span>
            <div className="d-flex mobile-projects">
            <div className="alert alert-primary mx-1"><span className="no-wrap"> Live Preview : <a href="https://chat-app-private.vercel.app/"><b>DEMO</b></a></span>
            </div><div className="alert alert-warning mx-1 no-wrap"><span> Source Code : <a href="https://github.com/emintatli/Chat-Web-App"><b>Github</b></a></span></div>
            </div>
        </div>
    </div>

    <div className="card my-2">
        <div className="card-body d-flex align-items-center justify-content-between back-front mobile-projects">
            <span className="text-dark w-50 me-3"><b><span className="alert alert-success sort-alert">#6</span>Multi Product Auction App</b></span>
            <span className="text-dark"><i><b>Features</b>:Realtime update with SocketIO,saving all data on MongoDB</i></span>
            <div className="d-flex mobile-projects">
            <div className="alert alert-primary mx-1"><span className="no-wrap"> Live Preview : <a href="https://auction-case-study-private.vercel.app/"><b>DEMO</b></a></span>
            <div className="alert alert-danger my-1 no-pd-mr"><span className="text-small">Check github first you need to add products with API before get started!</span></div>
            </div><div className="alert alert-warning mx-1 no-wrap"><span> Source Code : <a href="https://github.com/emintatli/auction-web-app"><b>Github</b></a></span></div>
            </div>
        </div>
    </div>

    <div className="card my-2">
        <div className="card-body d-flex align-items-center justify-content-between back-front mobile-projects">
            <span className="text-dark w-50 me-3"><b><span className="alert alert-success sort-alert">#7</span> DOCX to PDF Convert App </b></span>
            <span className="text-dark"><i><b>Features</b>:PDF file creation from DOCX file.Drag and drop file input.Automatic download URL expiration.</i></span>
            <div className="d-flex mobile-projects">
            <div className="alert alert-primary mx-1"><span className="no-wrap"> Live Preview : <a href="https://docx-to-pdf-web-app.vercel.app/"><b>DEMO</b></a></span>
            </div><div className="alert alert-warning mx-1 no-wrap"><span> Source Code : <a href="https://github.com/emintatli/Docx-to-PDF-WebApp-"><b>Github</b></a></span></div>
            </div>
        </div>
    </div>

    <div className="card my-2">
        <div className="card-body d-flex align-items-center justify-content-between back-front mobile-projects">
            <span className="text-dark w-50 me-3"><b><span className="alert alert-success sort-alert">#8</span> Crypto Currency Tracking App </b></span>
            <span className="text-dark"><i><b>Features</b>:Static Generation Pre-rendering.</i></span>
            <div className="d-flex mobile-projects">
            <div className="alert alert-primary mx-1"><span className="no-wrap"> Live Preview : <a href="https://kripto-takip-app.vercel.app/"><b>DEMO</b></a></span>
            </div><div className="alert alert-warning mx-1 no-wrap"><span> Source Code : <a href="https://github.com/emintatli/Kripto-takip-App"><b>Github</b></a></span></div>
            </div>
        </div>
    </div>

    <div className="card my-2">
        <div className="card-body d-flex align-items-center justify-content-between back-front mobile-projects">
            <span className="text-dark w-50 me-3"><b><span className="alert alert-success sort-alert">#9</span> Form Builder Drag and Drop </b></span>
            <span className="text-dark"><i><b>Features</b>:React DnD ,Context API</i></span>
            <div className="d-flex mobile-projects">
            <div className="alert alert-primary mx-1"><span className="no-wrap"> Live Preview : <a href="https://form-builder-drag-n-drop.vercel.app/"><b>DEMO</b></a></span>
            </div><div className="alert alert-warning mx-1 no-wrap"><span> Source Code : <a href="https://github.com/emintatli/Form-Builder-Drag-n-Drop"><b>Github</b></a></span></div>
            </div>
        </div>
    </div>

    <div className="card my-2">
        <div className="card-body d-flex align-items-center justify-content-between back-front mobile-projects">
            <span className="text-dark w-50 me-3"><b><span className="alert alert-success sort-alert">#10</span> Weather App With Geo Location  </b></span>
            <span className="text-dark"><i><b>Features</b>:Geo Location tracking.</i></span>
            <div className="d-flex mobile-projects">
            <div className="alert alert-primary mx-1"><span className="no-wrap"> Live Preview : <a href="https://weather-app-with-geo-location.vercel.app/"><b>DEMO</b></a></span>
            </div><div className="alert alert-warning mx-1 no-wrap"><span> Source Code : <a href="https://github.com/emintatli/Weather-App-With-Geo-Location"><b>Github</b></a></span></div>
            </div>
        </div>
    </div>

    <div className="card my-2">
        <div className="card-body d-flex align-items-center justify-content-between back-front mobile-projects">
            <span className="text-dark w-50 me-3"><b><span className="alert alert-success sort-alert">#11</span> PSD to React App </b></span>
            <span className="text-dark"><i><b>Features</b>:Accordion menu,dynamic JSON content.</i></span>
            <div className="d-flex mobile-projects">
            <div className="alert alert-primary mx-1"><span className="no-wrap"> Live Preview : <a href="https://sociality-io-project.herokuapp.com/"><b>DEMO</b></a>
            </span></div>
            <div className="alert alert-warning mx-1 no-wrap"><span> Source Code : <a href="https://github.com/emintatli/sociality.io-project"><b>Github</b></a>
            </span></div>
            </div>
        </div>
    </div>

    <div className="card my-2">
        <div className="card-body d-flex align-items-center justify-content-between back-front mobile-projects">
            <span className="text-dark w-50 me-3"><b><span className="alert alert-success sort-alert">#12</span> React Notes App </b></span>
            <span className="text-dark"><i><b>Features</b>:Local Storage</i></span>
            <div className="d-flex mobile-projects">
            <div className="alert alert-primary mx-1"><span className="no-wrap"> Live Preview : <a href="https://react-notes-app-pied.vercel.app/"><b>DEMO</b></a>
            </span></div>
            <div className="alert alert-warning mx-1 no-wrap"><span> Source Code : <a href="https://github.com/emintatli/react-notes-app"><b>Github</b></a>
            </span></div>
            </div>
        </div>
    </div>

    <div className="card my-2">
        <div className="card-body d-flex align-items-center justify-content-between back-front mobile-projects">
            <span className="text-dark w-50 me-3"><b><span className="alert alert-success sort-alert">#13</span> Rock, Paper ,Scissors React Game </b></span>
            <span className="text-dark"></span>
            <div className="d-flex mobile-projects">
            <div className="alert alert-primary mx-1"><span className="no-wrap"> Live Preview : <a href="https://rock-paper-scissors-app-ten.vercel.app/"><b>DEMO</b></a>
            </span></div>
            <div className="alert alert-warning mx-1 no-wrap"><span> Source Code : <a href="https://github.com/emintatli/rock-paper-scissors-app"><b>Github</b></a>
            </span></div>
            </div>
        </div>
    </div>

    <div className="card my-2">
        <div className="card-body d-flex align-items-center justify-content-between back-front mobile-projects">
            <span className="text-dark w-50 me-3"><b><span className="alert alert-success sort-alert">#14</span> React Book Search App </b></span>
            <span className="text-dark"><i><b>Features</b>:Google Books Rest API</i></span>
            <div className="d-flex mobile-projects">
            <div className="alert alert-primary mx-1"><span className="no-wrap"> Live Preview : <a href="https://book-search-app.vercel.app/"><b>DEMO</b></a>
            </span></div>
            <div className="alert alert-warning mx-1 no-wrap"><span> Source Code : <a href="https://github.com/emintatli/book-search-app"><b>Github</b></a>
            </span></div>
            </div>
        </div>
    </div>

    <div className="card my-2">
        <div className="card-body d-flex align-items-center justify-content-between back-front mobile-projects">
            <span className="text-dark w-50 me-3"><b><span className="alert alert-success sort-alert">#15</span> BMI Calculator </b></span>
            <span className="text-dark"><i><b>Features</b>:React Router</i></span>
            <div className="d-flex mobile-projects">
            <div className="alert alert-primary mx-1"><span className="no-wrap"> Live Preview : <a href="https://bmi-index-calc.vercel.app/"><b>DEMO</b></a>
            </span></div>
            <div className="alert alert-warning mx-1 no-wrap"><span> Source Code : <a href="https://github.com/emintatli/bmi-index-calc"><b>Github</b></a>
            </span></div>
            </div>
        </div>
    </div>

    <div className="card my-2">
        <div className="card-body d-flex align-items-center justify-content-between back-front mobile-projects">
            <span className="text-dark w-50 me-3"><b><span className="alert alert-success sort-alert">#16</span> Pokemon Match Game </b></span>
            <span className="text-dark"><i></i></span>
            <div className="d-flex mobile-projects">
            <div className="alert alert-primary mx-1"><span className="no-wrap"> Live Preview : <a href="https://flip-card-game-gamma.vercel.app/"><b>DEMO</b></a>
            </span></div>
            <div className="alert alert-warning mx-1 no-wrap"><span> Source Code : <a href="https://github.com/emintatli/flip-card-game"><b>Github</b></a>
            </span></div>
            </div>
        </div>
    </div>
    
    <div className="card my-2">
        <div className="card-body d-flex align-items-center justify-content-between back-other mobile-projects">
            <span className="text-dark w-50 me-3"><b><span className="alert alert-info sort-alert">#17</span> Face Recognition Payment System</b></span>
            <span className="text-dark"><i><b>Features</b>:Face detection,OpenCV,Numpy Array DB,Socket</i></span>
            <div className="d-flex mobile-projects">
            <div className="alert alert-danger mx-1"><span className="no-wrap"> Live Preview : <s>DEMO</s>
            </span></div>
            <div className="alert alert-warning mx-1 no-wrap"><span> Source Code : <a href="https://github.com/emintatli/Yuz-Tanima-Destekli-POS-Yazilimi"><b>Github</b></a>
            </span></div>
            </div>
        </div>
    </div>

    <div className="card my-2">
        <div className="card-body d-flex align-items-center justify-content-between back-other mobile-projects">
            <span className="text-dark w-50 me-3"><b><span className="alert alert-info sort-alert">#18</span> Detecting Electronic Card Issues</b></span>
            <span className="text-dark"><i><b>Features</b>:Image processing with matrix,MATLAB project</i></span>
            <div className="d-flex mobile-projects">
            <div className="alert alert-danger mx-1"><span className="no-wrap"> Live Preview : <s>DEMO</s>
            </span></div>
            <div className="alert alert-warning mx-1 no-wrap"><span> Source Code : <a href="https://github.com/emintatli/Detecting-Electronic-Card-Issues-MATLAB"><b>Github</b></a>
            </span></div>
            </div>
        </div>
    </div>
    
   </Content>
    </>
    }
    export default Projects