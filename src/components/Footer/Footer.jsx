import Planning from "../Planning/Planning";
const Footer = () => {
    return (
        <footer className="sticky top-[100vh]">
            <div className="bg-yellow-02">
                <div className="grid grid-cols-3">
                    <div>Footer 1</div>
                    <div className="p-4">
                        <Planning />
                    </div>
                    <div>Footer</div>
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
