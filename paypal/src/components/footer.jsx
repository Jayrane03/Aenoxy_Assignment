import React from 'react';
import "../Styles/footer.css";

const Footer = () => {
  return (
 <>
 
 <footer className="footer-container w-100">
    <div className="foot_row flex justify-around">
        <div className="foot_col">
            <h1>Small-to-Medium Business</h1>
            <div className="row">
                <div className="column">
                <a className="text-zinc-950"href="">Introduction</a>
                <a className="text-zinc-950"href="">Getting Started</a>
                </div>

                <div className='column'>
                    <h2 className='text-dark font-bold'>All Solutions</h2>
                    <a className="font-extralight"href="">Accepting Payments</a>
                    <a className="font-extralight"href="">Make Payments</a>
                    <a className="font-extralight"href="">Manage  Risk</a>
                    <a className="font-extralight"href="">Accelerate Growth</a>
                    <a className="font-extralight"href="">Streamline Operations</a>
                </div>
            </div>
            
       
        </div>
        <div className="foot_col">
        <h1>Enterprise</h1>
            <div className="row">
                <div className="column">
                <a className='font-bold' href="">Introduction</a>
                <a className='font-bold'href="">Marketplaces & Partners</a>
                </div>

                <div className='column'>
                    <h2 className='font-bold'>Platform & Solutions</h2>
                    <a className="font-extralight"href="">Accepting Payments</a>
                    <a className="font-extralight"href="">Make Payments</a>
                    <a className="font-extralight"href="">Manage  Risk</a>
                    <a className="font-extralight"href="">Accelerate Growth</a>
                    <a className="font-extralight"href="">Streamline Operations</a>
                </div>
            </div>
        
        </div>
        <div className="foot_col">
            <h1>More</h1>
            <div className="more">
                <a href="font-bold">Nonprofits</a>
                <a href="font-bold">Pricing</a>
                <a href="font-bold">Resource Center</a>
            </div>
        </div>
    </div>


    <div className="pay_pal">
        <img src="/Images/pay.jpg" alt=""  width={180}/>
    </div>

  <div className="foot_link">
    <div className="link1">
        <a href="">Help</a>
        <a href="">Contact</a>
        <a href="">Fees</a>
        <a href="">Security</a>
        <a href="">Apps</a>
        <a href="">Shops</a>
        <a href="">Enterprise</a>
        <a href="">Partners</a>
        <a href="">Feedback</a>

        <div className="usa absolute right-10">
            <img src="/Images/usa.png" alt=""  width={25} />
        </div>
    </div>
  <div className="hori_line"></div>
    <div className="link1">
        <a href="">About</a>
        <a href="">Newsroom</a>
        <a href="">Jobs</a>
        <a href="">Investor Relations</a>
        <a href="">Value in Action</a>
        <a href="">Public Policy</a>
        <a href="">Sitemap</a>
        

        <div className="right_link">
            <p className='text-xs'>&copy; 1992-2022</p>
            <a href="">Accessibility</a>
            <a href="">Privacy</a>
            <a href="">Cookies</a>
            <a href="">Legal</a>
        </div>
    </div>
  </div>


    </footer>
    <footer className="small-footer-container w-100">
    <div className="link1">
        <a href="">Help</a>
        <a href="">Contact</a>
        <a href="">Fees</a>
        <a href="">Security</a>
        <a href="">Apps</a>
        <a href="">Shops</a>
        <a href="">Enterprise</a>
        <a href="">Partners</a>
        <a href="">Feedback</a>
        <p>&copy; 1992-2022 Small Footer</p>

      
    </div>
    
  </footer>
 </>
  );
}

export default Footer;
