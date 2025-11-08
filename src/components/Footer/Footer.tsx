import { GithubOutlined, WhatsAppOutlined } from "@ant-design/icons";
import "./Footer.css";


export const Footer = () => {


    return (
        <div className="footer-contact">
            <a target="_blank" href="https://github.com/Mksm1929">
            <GithubOutlined className="cursor-pointer footer-contact-icon color-white" />
            </a>
            <a target="_blank" href="https://wa.me/89995389074">
            <WhatsAppOutlined className="cursor-pointer footer-contact-icon color-green" />
            </a>
        </div>
    )
}