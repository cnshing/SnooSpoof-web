'use client';
import styles from "@/components/ui/fields.module.scss"
import { ChangeEvent, CSSProperties, InputHTMLAttributes, TextareaHTMLAttributes, useState } from "react";


type Input = InputHTMLAttributes<HTMLInputElement>
type TextArea = TextareaHTMLAttributes<HTMLTextAreaElement>
type InputValue = Input['value']
type InputChecked = Input['checked']
type TextAreaValue = TextArea['value']

/**
 * 
 * @param className Inherits the default className properties of this component. Insert a new className to override some of its existing properties.
 * @param initialValue An optional initial value the input field should take on first load, which will be ignored on subsequent rerenders.
 * @param composeValue Modifies the value via composeValue(value) on input change. 
 * @returns A white gray-bordered input field
 */
export function Input(
    { initialValue = "", composeValue = (value) => value, children, ...passthrough }:
        {
            initialValue?: InputValue, composeValue?: (value: InputValue) => InputValue,
            /* composeValue should allow for any combinations of InputValue:
            (value: string) => string | number
            (value: string | number | undefined) => undefined
            (value: number) => string
            should all be accepted as valid types. This method would require some form of
            cartesian product of itself, and is currently outside the scope of my Typescript knowledge.
            See the below link for possible solutions:
            https://stackoverflow.com/questions/70741515/how-to-use-union-type-as-function-parameter
            */
            children?: React.ReactNode
        }
        & Input
) {
    const [value, setValue] = useState<InputValue>(initialValue);
    /*
        Assigning the intiial state value as a props is an anti-pattern:
        https://reactpatterns.js.org/docs/props-in-initial-state-is-an-anti-pattern/

        Since the initial value on useState is preserved, any prop changes to initialValue 
        will have no effect on rerender. Fortunately, initial values are by design single use.
        
    */
    function changeValue(event: ChangeEvent<HTMLInputElement>) {
        if (passthrough['onChange'] !== undefined) passthrough['onChange'](event)
        setValue(composeValue(event.target.value))
    }
    return (
        <input value={value} {...passthrough} className={`${styles.input_text} ${passthrough['className']}`} onChange={changeValue} />
    )
}

/**
 * 
 * @param className Inherits the default className properties of this component. Insert a new className to override some of its existing properties.
 * @param initialValue An optional initial value the textarea field should take on first load, which will be ignored on subsequent rerenders.
 * @param composeValue Modifies the value via composeValue(value) on input change. 
 * @returns A white gray-bordered textarea
 */
export function Textarea(
    { initialValue = "", composeValue = (value) => value, children, ...passthrough }:
        {
            initialValue?: TextAreaValue, composeValue?: (value: TextAreaValue)
                => TextAreaValue,
            children?: React.ReactNode
        } & TextArea
) {
    const [value, setValue] = useState<TextAreaValue>(initialValue);
    function changeValue(event: ChangeEvent<HTMLTextAreaElement>) {
        if (passthrough['onChange'] !== undefined) passthrough['onChange'](event)
        setValue(composeValue(event.target.value))
    }
    return (
        <textarea value={value} {...passthrough} className={`${styles.input_text} ${passthrough['className']}`} onChange={changeValue}></textarea>
    )
}


/**
 * @param initialChecked An optional initial checkbox state first load, which will be ignored on subsequent rerenders.
 * @param composeValue Modifies the value via composeValue(value) on input change. 
 * @param label An optional label to the left side of the checkbox
 * @param checkboxSize An optional size of the checkbox. Defaults to 19px.
 * @param checkboxSize An optional size of the label. Defaults to 16px.
 * @returns A white gray-bordered checkbox
 */
export function Checkbox(
    { initialChecked = false, composeChecked = (checked) => checked, label, labelSize = "16px", checkboxSize = "19px", ...passthrough }:
        {
            initialChecked?: InputChecked, composeChecked?: (checked: InputChecked)
                => InputChecked,
            label?: string, labelSize?: string, checkboxSize?: string
        } & Input
) {
    const sizing = {
        "--checkbox-size": checkboxSize,
        "--label-size": labelSize
    } as CSSProperties

    const [checkbox, setCheckbox] = useState<InputChecked>(initialChecked);
    function changeCheckbox(event: ChangeEvent<HTMLInputElement>) {
        if (passthrough['onChange'] !== undefined) passthrough['onChange'](event)
        setCheckbox(composeChecked(!checkbox))
    }
    return (
        <div className={styles.checkbox_container} style={sizing}>
            {label && <label className={styles.label}>{label}</label>}
            <input type="checkbox" className={styles.checkbox} {...passthrough} style={{ ...sizing, ...passthrough['style'] }} checked={checkbox} onChange={changeCheckbox} />
        </div>
    )
}