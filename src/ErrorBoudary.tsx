import { Component, ReactNode } from "react";
import { withTranslation } from "react-i18next";

interface ErrorBoundaryProps {
  children: ReactNode;
  t: any;
}
interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>{this.props.t("error.description")}</h1>;
    }

    return this.props.children;
  }
}

export default withTranslation()(ErrorBoundary);
