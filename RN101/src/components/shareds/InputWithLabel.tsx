// src/components/shareds/InputWithLabel.tsx
import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps, InputModeOptions } from 'react-native';

type InputWithLabelProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  inputMode?: InputModeOptions;
  align?: 'left' | 'center';
};

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  label,
  value,
  onChangeText,
  placeholder = '',
  secureTextEntry = false,
  inputMode = 'text',
  align = 'center',
}) => {
  return (
    <View style={styles.wrapper}>
      <Text
        style={[
          styles.label,
          align === 'left' && styles.leftAlignedLabel,
          align === 'center' && styles.centerAlignedLabel,
        ]}
      >
        {label}
      </Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder || label}
        secureTextEntry={secureTextEntry}
        inputMode={inputMode}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  leftAlignedLabel: {
    textAlign: 'left',
    alignSelf: 'flex-start',
    paddingLeft: '5%',
  },
  centerAlignedLabel: {
    textAlign: 'center',
    alignSelf: 'center',
  },
  input: {
    width: '90%',
    alignSelf: 'center',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 1,
  },
});

export default InputWithLabel;
/**
 * Açıklamalar:
 * - Bu bileşen, hem `label` hem de `TextInput` içeren ortak (shared) bir input yapısıdır.
 * - Tek bir yerde tanımlanarak tekrar tekrar kullanılabilir.
 * - `label` prop'u ile yukarıda görünen metin ayarlanır.
 * - `align` prop'u ile label metninin sola mı ortaya mı hizalanacağı belirlenebilir.
 * - `secureTextEntry` true yapılırsa, şifre girişleri için uygundur.
 * - `inputMode` ile email, numeric gibi farklı klavye türleri gösterilebilir.
 * - Dışardan `value` ve `onChangeText` ile kontrollü input davranışı sağlanır.
 * 
 * Kullanım Örneği:
 * <InputWithLabel
 *   label="Email"
 *   value={email}
 *   onChangeText={setEmail}
 *   inputMode="email"
 *   align="center"
 * />
 */