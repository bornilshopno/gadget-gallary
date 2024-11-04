

const Footer = () => {
    return (
        <div>
            <div className="pt-10 pb-5 space-y-5">
                <p className="text-xl font-semibold text-center">Gadget Heaven
            </p>
            <p className="text-center">Leading the way in cutting-edge technology and innovation.</p></div>
            <hr/>
            <div className="footer flex justify-around p-10">
                <nav>
                    <h6 className="footer-title">Product Support</h6>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Career</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </div>
    );
};

export default Footer;