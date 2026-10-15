import { AppRegistry, ScrollView, StyleSheet, Text, View } from 'react-native';
import RNAndroidNotificationListener, { RNAndroidNotificationListenerHeadlessJsName } from 'react-native-android-notification-listener';
import * as Speech from 'expo-speech';
import { SafeAreaView } from 'react-native-safe-area-context';
import { extractMessageDetailsTelebirr, notificationTelebirr } from '../services/messageProcessing';

const palette = {
  background: '#F6F7F2',
  ink: '#172821',
  muted: '#77837B',
  green: '#1D513D',
  greenLight: '#E6EEE6',
  card: '#FFFFFF',
  line: '#E9EDE7',
  orange: '#E9A866',
};

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.brand}>
            <View style={styles.brandMark}>
              <Text style={styles.brandMarkText}>s</Text>
            </View>
            <View>
              <Text style={styles.brandName}>sema</Text>
              <Text style={styles.brandCaption}>BIRR, SPOKEN</Text>
            </View>
          </View>
          <View style={styles.voiceTag}>
            <View style={styles.voiceDot} />
            <Text style={styles.voiceTagText}>VOICE ALERTS</Text>
          </View>
        </View>

        <View style={styles.intro}>
          <Text style={styles.kicker}>MONEY, IN YOUR WORDS</Text>
          <Text style={styles.title}>Stay in the flow.{'\n'}We’ll speak up.</Text>
          <Text style={styles.description}>
            Hear about incoming Telebirr payments without needing to check your screen.
          </Text>
        </View>

        <View style={styles.featureCard}>
          <View style={styles.featureTopRow}>
            <View style={styles.featureIcon}>
              <Text style={styles.featureIconText}>♪</Text>
            </View>
            <Text style={styles.featureEyebrow}>MADE FOR EVERYDAY</Text>
          </View>
          <Text style={styles.featureTitle}>Your notifications,{'\n'}read out loud.</Text>
          <Text style={styles.featureCopy}>
            A new payment comes in. Sema turns it into a clear voice alert.
          </Text>
          <View style={styles.waveform} accessibilityElementsHidden importantForAccessibility="no-hide-descendants">
            {[14, 24, 18, 32, 21, 28, 13, 24, 16, 30, 18, 25, 12].map((height, index) => (
              <View
                key={index}
                style={[
                  styles.waveBar,
                  { height, opacity: 0.48 + (index % 3) * 0.17 },
                ]}
              />
            ))}
          </View>
          <Text style={styles.featureFooter}>TELEBIRR · HANDS-FREE UPDATES</Text>
        </View>

        <View style={styles.sectionHeading}>
          <View>
            <Text style={styles.kicker}>A LITTLE PREVIEW</Text>
            <Text style={styles.sectionTitle}>This is what you’ll hear</Text>
          </View>
          <View style={styles.previewBadge}>
            <Text style={styles.previewBadgeText}>EXAMPLE</Text>
          </View>
        </View>

        <View style={styles.alertCard}>
          <View style={styles.alertTopRow}>
            <View style={styles.receivedIcon}>
              <Text style={styles.receivedIconText}>↓</Text>
            </View>
            <View style={styles.alertHeading}>
              <Text style={styles.alertLabel}>MONEY RECEIVED</Text>
              <Text style={styles.alertTime}>TELEBIRR NOTIFICATION</Text>
            </View>
            <View style={styles.alertDot} />
          </View>
          <Text style={styles.amount}>250<Text style={styles.amountDecimal}>.00</Text></Text>
          <Text style={styles.currency}>BIRR</Text>
          <View style={styles.divider} />
          <Text style={styles.spokenLabel}>SPOKEN MESSAGE</Text>
          <Text style={styles.spokenMessage}>“Received 250 birr from Hana.”</Text>
        </View>

        <View style={styles.setupNote}>
          <View style={styles.setupIcon}>
            <Text style={styles.setupIconText}>i</Text>
          </View>
          <View style={styles.setupCopy}>
            <Text style={styles.setupTitle}>One small setup</Text>
            <Text style={styles.setupDescription}>
              Allow notification access in Android settings so Sema can hear Telebirr alerts.
            </Text>
          </View>
        </View>

        <Text style={styles.footer}>A calmer way to keep up with your money.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

async function checkNotificationPermission() {
    const status = await RNAndroidNotificationListener.getPermissionStatus();

    if (status !== "authorized") {
        RNAndroidNotificationListener.requestPermission();
    }
}

const headlessNotificationListener = async ({notification}: { notification?: string }) => {
  if (notification) {
    try {
      const data = JSON.parse(notification);

      if (data.packageName === 'et.gov.telebirr' || data.title?.toLowerCase().includes('telebirr') || data.title === "Telebirr") {
        const parsedDetails = extractMessageDetailsTelebirr(data.text);

        if(parsedDetails) {
          const speechText = notificationTelebirr(parsedDetails);
          console.log('Notification received:', speechText);

          Speech.speak(speechText, {
            language: 'en',
            pitch: 1.0,
            rate: 1.0,
          });
        }
      }
    } catch(error) {
      console.log("Error processing background notificaton: ", error);
    }
  }
}

AppRegistry.registerHeadlessTask(
  RNAndroidNotificationListenerHeadlessJsName,
  () => headlessNotificationListener
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.background,
  },
  content: {
    width: '100%',
    maxWidth: 560,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingTop: 14,
    paddingBottom: 36,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
  },
  brandMark: {
    width: 42,
    height: 42,
    borderRadius: 15,
    backgroundColor: palette.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brandMarkText: {
    color: '#FFFFFF',
    fontSize: 29,
    lineHeight: 34,
    fontWeight: '700',
    fontStyle: 'italic',
  },
  brandName: {
    color: palette.ink,
    fontSize: 19,
    lineHeight: 22,
    fontWeight: '700',
    letterSpacing: -0.7,
  },
  brandCaption: {
    color: palette.muted,
    fontSize: 9,
    lineHeight: 13,
    fontWeight: '700',
    letterSpacing: 1.15,
  },
  voiceTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    borderRadius: 20,
    backgroundColor: palette.greenLight,
    paddingHorizontal: 11,
    paddingVertical: 9,
  },
  voiceDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: palette.green,
  },
  voiceTagText: {
    color: palette.green,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.65,
  },
  intro: {
    marginTop: 38,
    marginBottom: 24,
  },
  kicker: {
    color: palette.green,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.4,
  },
  title: {
    color: palette.ink,
    fontSize: 37,
    lineHeight: 42,
    fontWeight: '700',
    letterSpacing: -1.45,
    marginTop: 11,
  },
  description: {
    color: palette.muted,
    fontSize: 15,
    lineHeight: 22,
    marginTop: 12,
    maxWidth: 340,
  },
  featureCard: {
    overflow: 'hidden',
    borderRadius: 24,
    backgroundColor: palette.green,
    padding: 22,
  },
  featureTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  featureIcon: {
    width: 34,
    height: 34,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.14)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureIconText: {
    color: '#FFFFFF',
    fontSize: 20,
    lineHeight: 23,
    fontWeight: '700',
  },
  featureEyebrow: {
    color: '#D3E1D5',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1,
  },
  featureTitle: {
    color: '#FFFFFF',
    fontSize: 25,
    lineHeight: 30,
    fontWeight: '700',
    letterSpacing: -0.65,
    marginTop: 19,
  },
  featureCopy: {
    color: '#D3E1D5',
    fontSize: 13,
    lineHeight: 19,
    marginTop: 8,
    maxWidth: 290,
  },
  waveform: {
    height: 38,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 17,
  },
  waveBar: {
    width: 4,
    borderRadius: 3,
    backgroundColor: palette.orange,
  },
  featureFooter: {
    color: '#C6D8C9',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.85,
    marginTop: 7,
  },
  sectionHeading: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 14,
  },
  sectionTitle: {
    color: palette.ink,
    fontSize: 17,
    lineHeight: 23,
    fontWeight: '700',
    letterSpacing: -0.3,
    marginTop: 5,
  },
  previewBadge: {
    borderRadius: 8,
    backgroundColor: '#F0E9DC',
    paddingHorizontal: 9,
    paddingVertical: 6,
    marginBottom: 2,
  },
  previewBadgeText: {
    color: '#866B45',
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  alertCard: {
    borderRadius: 22,
    backgroundColor: palette.card,
    padding: 19,
    borderWidth: 1,
    borderColor: palette.line,
  },
  alertTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  receivedIcon: {
    width: 40,
    height: 40,
    borderRadius: 14,
    backgroundColor: palette.greenLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  receivedIconText: {
    color: palette.green,
    fontSize: 23,
    lineHeight: 27,
    fontWeight: '600',
  },
  alertHeading: {
    flex: 1,
    marginLeft: 11,
  },
  alertLabel: {
    color: palette.ink,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.65,
  },
  alertTime: {
    color: palette.muted,
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 0.65,
    marginTop: 4,
  },
  alertDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: palette.orange,
  },
  amount: {
    color: palette.ink,
    fontSize: 37,
    lineHeight: 42,
    fontWeight: '700',
    letterSpacing: -1.2,
    marginTop: 20,
  },
  amountDecimal: {
    fontSize: 27,
    letterSpacing: -0.7,
  },
  currency: {
    color: palette.muted,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.3,
    marginTop: 1,
  },
  divider: {
    height: 1,
    backgroundColor: palette.line,
    marginVertical: 16,
  },
  spokenLabel: {
    color: palette.muted,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1,
  },
  spokenMessage: {
    color: palette.green,
    fontSize: 15,
    lineHeight: 22,
    fontWeight: '600',
    marginTop: 7,
  },
  setupNote: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    marginTop: 20,
    paddingHorizontal: 3,
  },
  setupIcon: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#E9EDE7',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  setupIconText: {
    color: palette.green,
    fontSize: 13,
    fontWeight: '700',
  },
  setupCopy: {
    flex: 1,
  },
  setupTitle: {
    color: palette.ink,
    fontSize: 12,
    fontWeight: '700',
  },
  setupDescription: {
    color: palette.muted,
    fontSize: 12,
    lineHeight: 18,
    marginTop: 4,
  },
  footer: {
    color: palette.muted,
    fontSize: 11,
    textAlign: 'center',
    marginTop: 23,
  },
});