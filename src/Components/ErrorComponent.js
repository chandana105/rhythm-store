const ErrorComponent = (props) => {
  const { error } = props;
  console.log( error.error );
  return (
    <div className="simple-alert">
      <div className="alert alert-danger">
        <i className="fas fa-exclamation-circle"></i>
        <span>{JSON.stringify(error.error.message)}</span>
      </div>
    </div>
  );
};

export default ErrorComponent;
