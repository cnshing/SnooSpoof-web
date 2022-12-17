

import { Children, cloneElement, Fragment, isValidElement, ReactNode } from "react";
import { deepMap } from 'react-children-utilities';

/**
 * Distgunishes between a component that requires prop forwaridng.
 * @param {React.ReactNode} child - Any child
 * @returns {boolean} True if props forwarding is required. False otherwise.
 */
function requireProps(child: ReactNode): boolean {
    return isValidElement(child) && "requires" in child.props && Array.isArray(child.props.requires);
}

/**
 * Automatically forward any props of object for any children that requires it.
 * @param {Object} object - Any object whose property keys matches what is required in the requires = Array<string>.
 * @param {React.ReactNode} children - Any children
 */
function shareObjectProps({ children, object }: { children: ReactNode, object: Object }) {
    const passProps = (child: ReactNode) => {
        if (requireProps(child)) {
            const requires: Array<string> = child.props.requires
            const props: Object = requires.reduce(function (prop, require) {
                prop[require] = object[require];
                return prop;
            }, {});
            return cloneElement(child as React.ReactElement, props);

        }
        return child;

    };
    return deepMap(Children.toArray(children), passProps);
}

/**
 * A state-managment tool/useContext alternative for single objects. Functional components that require
 * a certain value from the single object can simply match their prop signature to the object's interface 
 * and those values will be automatically accessible as long as it is under the ShareObject component. 
 * @param {Object} object - An single object that needs to be shared to multiple components.
 * @param {children} children - Functional component that requires an object's value.
 */
export default function ShareObject({ object, children }: { object: Object, children: ReactNode }) {
    return (
        <Fragment>
            {shareObjectProps({ children, object })}
        </Fragment>
    )
}