import "./youtube.scss";

const Youtube = () => {
  return (
    <div className="youtube">
      <iframe src="https://www.youtube.com/embed/videoseries?si=cf67sRD1QxFRRa6d&amp;list=PL4v8DUyvyGjhb_lqNFM0VandTQdaXvRuP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
    </div>
  );
};

export default Youtube;
