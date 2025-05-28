import React, { useEffect, type ComponentType } from 'react';

function withLogger<P extends object>(WrappedComponent: ComponentType<P>) {
    const ComponentWithLogger: React.FC<P> = (props) => {
        const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

        useEffect(() => {
            console.log(`[Logger]: ${componentName} mounted.`);

            return () => {
                console.log(`[Logger]: ${componentName} unmounted.`);
            
            };
        }, []);

        return <WrappedComponent {...props} />;
    };
    ComponentWithLogger.displayName = `withLogger(${WrappedComponent.displayName || WrappedComponent.name})`;

    return ComponentWithLogger;
}

export default withLogger;