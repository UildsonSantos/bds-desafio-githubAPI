import ContentLoader from 'react-content-loader';
import './styles.css';

const AfterImageLoader = () => {
  return (
    <div className="image-loader">
      <ContentLoader height="100%" width="100%" viewBox="0 0 295 247">
        <rect x="55" y="10" rx="5" ry="5" width="100%" height="100%" />
       
      </ContentLoader>
    </div>
  );
};


export default AfterImageLoader;