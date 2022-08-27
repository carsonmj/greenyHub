import React from "react";

interface Props {
  onRetry: () => void;
  children?: any;
  fallback?: any;
}

interface State {
  error?: any;
}

class ErrorBoundaryWithRetry extends React.Component<Props, State> {
  state = { error: null };

  static getDerivedStateFromError(error: any): State {
    return { error: error };
  }

  _retry = () => {
    this.props.onRetry();
    this.setState({
      error: null,
    });
  };

  render() {
    const { children, fallback } = this.props;
    const { error } = this.state;
    if (error) {
      if (typeof fallback === "function") {
        return fallback({ error, retry: this._retry });
      }
      return fallback;
    }
    return children;
  }
}

export default ErrorBoundaryWithRetry;
