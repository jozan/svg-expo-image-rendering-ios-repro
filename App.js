import { useState } from "react"
import { StatusBar } from "expo-status-bar"
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native"
import { Image } from "expo-image"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"

import { ionicons } from "./icons/ionicons"
import { heroicons } from "./icons/heroicons"

export default function App() {
  const [selectedIcon, setSelectedIcon] = useState("")
  const [iconSet, setIconSet] = useState("ionicons")
  const icons = iconSet === "ionicons" ? ionicons : heroicons

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <ScrollView style={styles.container}>
          <View style={styles.content}>
            <View style={styles.list}>
              {icons.map((icon) => (
                <Pressable
                  key={icon.id}
                  style={styles.iconContainer}
                  onPress={() => {
                    setSelectedIcon(icon.id)
                    console.log("selected icon:", `${iconSet}/${icon.id}.svg`)
                  }}
                >
                  <Image source={icon.getIcon()} style={styles.icon} />
                </Pressable>
              ))}
            </View>
          </View>
        </ScrollView>
        <View style={styles.selectedContainer}>
          <Text>
            Selected icon:{" "}
            <Text style={styles.selectedIconText}>
              {selectedIcon || "(press on icon)"}
            </Text>
          </Text>
          <View style={styles.iconSetSelectionContainer}>
            <Pressable
              onPress={() => setIconSet("ionicons")}
              style={[
                styles.iconSetButton,
                iconSet === "ionicons" && styles.iconSetButtonSelected,
              ]}
            >
              <Text>ionicons</Text>
            </Pressable>
            <Pressable
              onPress={() => setIconSet("heroicons")}
              style={[
                styles.iconSetButton,
                iconSet === "heroicons" && styles.iconSetButtonSelected,
              ]}
            >
              <Text>heroicons</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
  },
  list: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 24,
    justifyContent: "center",
    gap: 16,
    paddingBottom: 24,
  },
  iconContainer: {
    padding: 8,
    backgroundColor: "#eee",
    borderRadius: 8,
    borderCurve: "continuous",
  },
  icon: {
    width: 24,
    height: 24,
  },
  selectedContainer: {
    gap: 16,
    padding: 24,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#ccc",
    justifyContent: "center",
  },
  selectedIconText: {
    fontFamily: "Courier New",
    fontWeight: "600",
  },
  iconSetSelectionContainer: {
    flexDirection: "row",
    gap: 16,
  },
  iconSetButton: {
    flex: 1,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    borderCurve: "continuous",
    justifyContent: "center",
    alignItems: "center",
  },
  iconSetButtonSelected: {
    backgroundColor: "#eee",
  },
})
