import { GithubOutlined, WhatsAppOutlined } from "@ant-design/icons";
import "./Footer.css";
import Telegram from "../../assets/icons/telegram.png";


export const Footer = () => {


    return (
        <div className="footer-contact">
            <a target="_blank" href="https://github.com/Mksm1929">
            <GithubOutlined className="cursor-pointer footer-contact-icon color-white" />
            </a>
            <a target="_blank" href="https://wa.me/+79995389074">
            <WhatsAppOutlined className="cursor-pointer footer-contact-icon color-green" />
            </a>
            <a target="_blank" href="https://t.me/maksim_varnin">
            <img src={Telegram} className="cursor-pointer footer-contact-icon-telegram" />
            </a>
        </div>
    )
}