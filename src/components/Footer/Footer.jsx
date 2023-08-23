import Planning from "../Planning/Planning";
import {
    FaFacebook as FacebookIcon,
    FaInstagram as InstagramIcon,
    FaLinkedin as FaLinkedin,
} from "react-icons/fa6";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const Footer = () => {
    const emailAddress = "garage-vincent.parrot@example.com";
    const phoneNumber = "+33612345678";

    const handleSendEmail = () => {
        window.location.href = `mailto:${emailAddress}`;
    };

    const handleDialNumber = () => {
        window.location.href = `tel:${phoneNumber}`;
    }


    return (
        <footer className="sticky top-[100vh]">
            <div className="bg-yellow-02">
                <div className="grid lg:grid-cols-3">
                    <div className="p-4 lg:my-auto">
                        <p className="font-bold italic text-center">
                            Suivez-nous sur les réseaux sociaux :
                        </p>
                        <div className="flex gap-4 justify-center mt-8">
                            <Link
                                to="https://www.facebook.com/"
                                target="_blank"
                            >
                                <FacebookIcon size={26} />
                            </Link>
                            <Link
                                to="https://www.instagram.com/"
                                target="_blank"
                            >
                                <InstagramIcon size={26} />
                            </Link>
                            <Link
                                to="https://www.linkedin.com/"
                                target="_blank"
                            >
                                <FaLinkedin size={26} />
                            </Link>
                        </div>
                    </div>
                    <div className="p-4">
                        <Planning />
                    </div>
                    <div className="p-4 lg:my-auto">
                        <p className="font-bold italic text-center">
                            Nous contacter :
                        </p>
                        <div className="flex flex-col items-center gap-4 justify-center mt-4">
                            <p>
                                Via le formulaire de{" "}
                                <Link
                                    to="/contact"
                                    className="text-black-02 hover:underline hover:un hover:decoration-red-02"
                                >
                                    Contact
                                </Link>{" "}
                            </p>
                            <p className="flex gap-2">
                                Par mail :{" "}
                                <EnvelopeIcon
                                    className="w-6 hover:cursor-pointer"
                                    onClick={handleSendEmail}
                                />
                            </p>
                            <p className="flex gap-2">
                                Par téléphone :
                                <PhoneIcon
                                    className="w-6 hover:cursor-pointer"
                                    onClick={handleDialNumber}
                                />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2">
                    <div>Footer 2</div>
                    <div>Footer 2</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
