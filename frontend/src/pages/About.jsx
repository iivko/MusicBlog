import "../css/About.css";
import img from "../assets/images/team.jpg";

function About() {
    return (
        <section className="about-section">
            <div className="about-section__container">
                <div className="about-section__content">
                    <h1 className="about-section__title">关于我</h1>
                    <p className="about-section__text">
                    长期以来，读者在浏览页面布局时会被页面的可读内容所吸引，这是一个公认的事实。使用 Lorem Ipsum 的意义在于，它具有或多或少正常的字母分布，而不是使用“此处内容，此处内容”，使其看起来像可读的英语。许多桌面出版软件包和网页编辑器现在都使用 Lorem Ipsum 作为其默认模型文本，搜索“lorem ipsum”会发现许多网站仍处于起步阶段。多年来，各种版本已经演变，有时是偶然的，有时是故意的（注入幽默等）。
                    </p>
                </div>
                <div className="about-section__image-wrapper">
                    <img
                        src={img}
                        alt="Our team"
                        width={800}
                        height={600}
                        className="about-section__image"
                    />
                </div>
            </div>
        </section>
    );
}

export default About;
