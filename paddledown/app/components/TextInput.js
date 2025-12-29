import { TextInput } from "react-native";

export default function FormText({ placeholder, secureTextOnly, className }) {
  return (
    <TextInput
      placeholder={placeholder}
      secureTextOnly={secureTextOnly}
      className={className}
    />
  );
}
