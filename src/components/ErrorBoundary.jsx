import React from 'react';
import storage from '../services/safeStorage';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    handleReset = () => {
        // Clear all local storage as it might be the cause (corrupt data)
        storage.local.clear();
        // Reload the page to start fresh
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '2rem',
                    backgroundColor: '#f8fafc',
                    color: '#1e293b',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                }}>
                    <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#ef4444' }}>Oops! Something went wrong.</h1>
                    <p style={{ marginBottom: '2rem', maxWidth: '400px', lineHeight: '1.6' }}>
                        The app encountered an error (likely due to old saved data).
                        Please click the button below to fix it.
                    </p>
                    <button
                        onClick={this.handleReset}
                        style={{
                            padding: '0.8rem 1.5rem',
                            backgroundColor: '#2563eb',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontSize: '1rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)'
                        }}
                    >
                        Fix & Reload App
                    </button>

                    {process.env.NODE_ENV === 'development' && (
                        <pre style={{ marginTop: '2rem', padding: '1rem', background: '#e2e8f0', borderRadius: '8px', overflow: 'auto', maxWidth: '100%' }}>
                            {this.state.error?.toString()}
                        </pre>
                    )}
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
