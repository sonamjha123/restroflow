const UserOffline = () => {
  return (
    <div className="user-offline-container">
      <h1 className="user-offline- heading">🔴 Offline!</h1>
      {/* <img className="user-offline-img" src={offlineImage} alt="offlineImage"></img> */}
      <p className="user-offline-para">Please check your internet connection</p>
    </div>
  );
};

export default UserOffline;
