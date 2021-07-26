const ErrorComponent = (props) => {
  const { error } = props;

  return (
    <div className="simple-alert">
      <div className="alert alert-danger">
        <i className="fas fa-exclamation-circle"></i>
        <span>{JSON.stringify(error.message)}</span>
      </div>
    </div>
  );
};

export default ErrorComponent;
