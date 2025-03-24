import { icons } from "@/constants/icons";
import { Image, TextInput } from "react-native";
import { View } from "react-native";

interface IProps {
  onPress: () => void;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const SearchBar = ({ onPress, placeholder, value, onChangeText }: IProps) => {
  return (
    <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor={`#ab8bff`}
      />
      <TextInput
        placeholder={placeholder}
        onPress={onPress}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
