import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'; // For settings and other icons
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen({ navigation, theme }) {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme === 'light' ? '#f0f4f8' : '#1c1c1c' }]}>
      <StatusBar style={theme === 'light' ? 'dark' : 'light'} />
      <View style={[styles.headerContainer, { backgroundColor: theme === 'light' ? '#34495e' : '#2c3e50' }]}>
        <Text style={[styles.header, { color: theme === 'light' ? '#fff' : '#ecf0f1' }]}>Personal Info Profile</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" size={30} color={theme === 'light' ? '#fff' : '#ecf0f1'} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={[styles.title, { color: theme === 'light' ? '#2c3e50' : '#ecf0f1' }]}>Welcome to My Profile!</Text>
        <Text style={[styles.paragraph, { color: theme === 'light' ? '#2c3e50' : '#ecf0f1' }]}>
          My name is <Text style={styles.boldText}>Dadole, Franchette Doreen B.</Text> and I am{' '}
          <Text style={styles.boldText}>21 years old</Text>.
        </Text>
        <Text style={[styles.paragraph, { color: theme === 'light' ? '#2c3e50' : '#ecf0f1' }]}>
          I live in <Text style={styles.boldText}>Cagayan De Oro City</Text>.
        </Text>
        <Text style={[styles.paragraph, { color: theme === 'light' ? '#2c3e50' : '#ecf0f1' }]}>
          I study at the <Text style={styles.boldText}>University of Science and Technology of the Southern Philippines</Text>.
        </Text>

        <Image
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1677101221533-52b45823a2dc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.image}
        />

        {/* Hobby Section */}
        <View style={[styles.card, { backgroundColor: '#ecf0f1' }]}>
          <Ionicons name="game-controller-outline" size={40} color="#2980b9" />
          <Text style={[styles.sectionTitle, { color: '#2980b9' }]}>Hobbies</Text>
          <Text style={[styles.paragraph, { color: '#2c3e50' }]}>
            🎮 <Text style={styles.boldText}>Gaming</Text> and watching e-sports tournaments.
          </Text>
        </View>

        {/* Languages Section - Multiple Boxes */}
        <View style={styles.languagesContainer}>
          {/* HTML Box */}
          <TouchableOpacity
            style={[styles.languageBox, { backgroundColor: '#e34f26' }]}
            onPress={() => openLink('https://developer.mozilla.org/en-US/docs/Web/HTML')}
          >
            <FontAwesome name="html5" size={40} color="#fff" />
            <Text style={styles.languageTitle}>HTML</Text>
          </TouchableOpacity>

          {/* CSS Box */}
          <TouchableOpacity
            style={[styles.languageBox, { backgroundColor: '#264de4' }]}
            onPress={() => openLink('https://developer.mozilla.org/en-US/docs/Web/CSS')}
          >
            <FontAwesome name="css3" size={40} color="#fff" />
            <Text style={styles.languageTitle}>CSS</Text>
          </TouchableOpacity>

          {/* JavaScript Box */}
          <TouchableOpacity
            style={[styles.languageBox, { backgroundColor: '#f7df1e' }]}
            onPress={() => openLink('https://developer.mozilla.org/en-US/docs/Web/JavaScript')}
          >
            <FontAwesome name="js-square" size={40} color="#000" />
            <Text style={styles.languageTitle}>JavaScript</Text>
          </TouchableOpacity>

          {/* Python Box */}
          <TouchableOpacity
            style={[styles.languageBox, { backgroundColor: '#306998' }]}
            onPress={() => openLink('https://www.python.org/')}
          >
            <MaterialCommunityIcons name="language-python" size={40} color="#fff" />
            <Text style={styles.languageTitle}>Python</Text>
          </TouchableOpacity>
        </View>

        {/* Other Stuff Section */}
        <TouchableOpacity
          style={[styles.card, { backgroundColor: theme === 'light' ? '#ecf0f1' : '#2c3e50' }]}
          onPress={() => navigation.navigate('Other Stuff')}
        >
          <Text style={[styles.sectionTitle, { color: theme === 'light' ? '#2c3e50' : '#ecf0f1' }]}>Other Stuff</Text>
          <Text style={[styles.paragraph, { color: theme === 'light' ? '#2c3e50' : '#ecf0f1' }]}>See additional personal details</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={[styles.footer, { backgroundColor: theme === 'light' ? '#34495e' : '#2c3e50' }]}>
        <Text style={[styles.footerText, { color: theme === 'light' ? '#fff' : '#ecf0f1' }]}>© 2025 Personal Information. All rights reserved.</Text>
      </View>
    </View>
  );
}

function SettingsScreen({ theme, toggleTheme }) {
  return (
    <View style={[styles.container, { backgroundColor: theme === 'light' ? '#f0f4f8' : '#1c1c1c' }]}>
      <StatusBar style={theme === 'light' ? 'dark' : 'light'} />
      <View style={[styles.headerContainer, { backgroundColor: theme === 'light' ? '#34495e' : '#2c3e50' }]}>
        <Text style={[styles.header, { color: theme === 'light' ? '#fff' : '#ecf0f1' }]}>Settings</Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={[styles.sectionTitle, { color: theme === 'light' ? '#2c3e50' : '#ecf0f1' }]}>Settings</Text>

        <TouchableOpacity onPress={toggleTheme}>
          <Text style={[styles.paragraph, { color: theme === 'light' ? '#2c3e50' : '#ecf0f1' }]}>
            🌙 <Text style={styles.boldText}>Change Theme</Text> (Current: {theme === 'light' ? 'Light' : 'Dark'})
          </Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={[styles.footer, { backgroundColor: theme === 'light' ? '#34495e' : '#2c3e50' }]}>
        <Text style={[styles.footerText, { color: theme === 'light' ? '#fff' : '#ecf0f1' }]}>© 2025 Personal Information. All rights reserved.</Text>
      </View>
    </View>
  );
}

function OtherStuffScreen({ theme }) {
  return (
    <View style={[styles.container, { backgroundColor: theme === 'light' ? '#f0f4f8' : '#1c1c1c' }]}>
      <StatusBar style={theme === 'light' ? 'dark' : 'light'} />
      <View style={[styles.headerContainer, { backgroundColor: theme === 'light' ? '#34495e' : '#2c3e50' }]}>
        <Text style={[styles.header, { color: theme === 'light' ? '#fff' : '#ecf0f1' }]}>Other Stuff</Text>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={[styles.sectionTitle, { color: theme === 'light' ? '#2c3e50' : '#ecf0f1' }]}>Additional Info</Text>
        <Text style={[styles.paragraph, { color: theme === 'light' ? '#2c3e50' : '#ecf0f1' }]}>📍 Currently working on React Native apps.</Text>
        <Text style={[styles.paragraph, { color: theme === 'light' ? '#2c3e50' : '#ecf0f1' }]}>✈️ Planning to travel to Japan next year.</Text>
        <Text style={[styles.paragraph, { color: theme === 'light' ? '#2c3e50' : '#ecf0f1' }]}>💼 Looking for new job opportunities in tech.</Text>

        <Image
          source={{
            uri: 'https://plus.unsplash.com/premium_photo-1661964177687-57387c2cbd14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // A public image of Japan
          }}
          style={styles.image}
        />
      </ScrollView>

      <View style={[styles.footer, { backgroundColor: theme === 'light' ? '#34495e' : '#2c3e50' }]}>
        <Text style={[styles.footerText, { color: theme === 'light' ? '#fff' : '#ecf0f1' }]}>© 2025 Personal Information. All rights reserved.</Text>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  const [theme, setTheme] = useState('light'); // light by default

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} theme={theme} />}
        </Stack.Screen>
        <Stack.Screen
          name="Settings"
          component={(props) => <SettingsScreen {...props} theme={theme} toggleTheme={toggleTheme} />}
        />
        <Stack.Screen name="Other Stuff" component={(props) => <OtherStuffScreen {...props} theme={theme} />} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: '#bdc3c7',
  },
  card: {
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  footer: {
    width: '100%',
    padding: 15,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
  },
  languagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  languageBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  languageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
});
