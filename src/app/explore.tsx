import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const colors = {
  background: '#F6F7F2',
  ink: '#172821',
  muted: '#77837B',
  green: '#1D513D',
  greenLight: '#E6EEE6',
  card: '#FFFFFF',
  line: '#E9EDE7',
};

export default function ActivityScreen() {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}>
        <View style={styles.brand}>
          <View style={styles.brandMark}>
            <Text style={styles.brandMarkText}>s</Text>
          </View>
          <View>
            <Text style={styles.brandName}>sema</Text>
            <Text style={styles.brandCaption}>BIRR, SPOKEN</Text>
          </View>
        </View>

        <Text style={styles.kicker}>A CLEARER WAY TO KEEP UP</Text>
        <Text style={styles.title}>Example alerts</Text>
        <Text style={styles.description}>
          Here’s how an incoming Telebirr payment can show up in Sema before it’s read aloud.
        </Text>

        <View style={styles.sampleBanner}>
          <View style={styles.sampleDot} />
          <Text style={styles.sampleBannerText}>DESIGN PREVIEW · NOT A REAL TRANSACTION</Text>
        </View>

        <View style={styles.notificationCard}>
          <View style={styles.notificationHeader}>
            <View style={styles.appIcon}>
              <Text style={styles.appIconText}>T</Text>
            </View>
            <View style={styles.headerCopy}>
              <Text style={styles.appName}>TELEBIRR</Text>
              <Text style={styles.notificationTime}>PAYMENT RECEIVED</Text>
            </View>
            <View style={styles.receivedPill}>
              <Text style={styles.receivedPillText}>RECEIVED</Text>
            </View>
          </View>

          <View style={styles.amountRow}>
            <Text style={styles.currencyPrefix}>ETB</Text>
            <Text style={styles.amount}>250.00</Text>
          </View>
          <Text style={styles.sender}>From Hana</Text>

          <View style={styles.divider} />

          <View style={styles.speechHeader}>
            <View style={styles.speechIcon}>
              <Text style={styles.speechIconText}>♪</Text>
            </View>
            <Text style={styles.speechLabel}>SEMA SAYS</Text>
          </View>
          <Text style={styles.spokenMessage}>“Received 250 birr from Hana.”</Text>
        </View>

        <View style={styles.howItWorks}>
          <Text style={styles.howTitle}>Simple by design</Text>
          <View style={styles.step}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>1</Text>
            </View>
            <View style={styles.stepCopy}>
              <Text style={styles.stepTitle}>A Telebirr alert arrives</Text>
              <Text style={styles.stepDescription}>Sema recognizes an incoming payment notification.</Text>
            </View>
          </View>
          <View style={styles.step}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>2</Text>
            </View>
            <View style={styles.stepCopy}>
              <Text style={styles.stepTitle}>You hear the important part</Text>
              <Text style={styles.stepDescription}>The amount and sender are spoken aloud.</Text>
            </View>
          </View>
        </View>

        <Text style={styles.disclaimer}>
          This is a visual example only. Sema doesn’t save a transaction history here.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    width: '100%',
    maxWidth: 560,
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingTop: 14,
    paddingBottom: 36,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
    marginBottom: 36,
  },
  brandMark: {
    width: 42,
    height: 42,
    borderRadius: 15,
    backgroundColor: colors.green,
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
    color: colors.ink,
    fontSize: 19,
    lineHeight: 22,
    fontWeight: '700',
    letterSpacing: -0.7,
  },
  brandCaption: {
    color: colors.muted,
    fontSize: 9,
    lineHeight: 13,
    fontWeight: '700',
    letterSpacing: 1.15,
  },
  kicker: {
    color: colors.green,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 1.4,
  },
  title: {
    color: colors.ink,
    fontSize: 34,
    lineHeight: 40,
    fontWeight: '700',
    letterSpacing: -1.2,
    marginTop: 9,
  },
  description: {
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
    marginTop: 9,
    marginBottom: 20,
  },
  sampleBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: 8,
    borderRadius: 9,
    backgroundColor: '#F0E9DC',
    paddingHorizontal: 11,
    paddingVertical: 8,
    marginBottom: 12,
  },
  sampleDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#B5844A',
  },
  sampleBannerText: {
    color: '#866B45',
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: 0.45,
  },
  notificationCard: {
    borderRadius: 22,
    backgroundColor: colors.card,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.line,
  },
  notificationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appIcon: {
    width: 39,
    height: 39,
    borderRadius: 13,
    backgroundColor: colors.greenLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  appIconText: {
    color: colors.green,
    fontSize: 18,
    fontWeight: '700',
  },
  headerCopy: {
    flex: 1,
    marginLeft: 10,
  },
  appName: {
    color: colors.ink,
    fontSize: 10,
    fontWeight: '700',
    letterSpacing: 0.8,
  },
  notificationTime: {
    color: colors.muted,
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 0.55,
    marginTop: 4,
  },
  receivedPill: {
    borderRadius: 10,
    backgroundColor: colors.greenLight,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },
  receivedPillText: {
    color: colors.green,
    fontSize: 8,
    fontWeight: '700',
    letterSpacing: 0.55,
  },
  amountRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8,
    marginTop: 26,
  },
  currencyPrefix: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.6,
  },
  amount: {
    color: colors.ink,
    fontSize: 38,
    lineHeight: 44,
    fontWeight: '700',
    letterSpacing: -1.2,
  },
  sender: {
    color: colors.muted,
    fontSize: 14,
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: colors.line,
    marginVertical: 19,
  },
  speechHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
  },
  speechIcon: {
    width: 27,
    height: 27,
    borderRadius: 9,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  speechIconText: {
    color: '#FFFFFF',
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '700',
  },
  speechLabel: {
    color: colors.green,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1,
  },
  spokenMessage: {
    color: colors.ink,
    fontSize: 16,
    lineHeight: 23,
    fontWeight: '600',
    marginTop: 10,
  },
  howItWorks: {
    borderRadius: 20,
    backgroundColor: '#EDF1EA',
    padding: 19,
    marginTop: 20,
  },
  howTitle: {
    color: colors.ink,
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 16,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 11,
    marginTop: 3,
  },
  stepNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepNumberText: {
    color: colors.green,
    fontSize: 11,
    fontWeight: '700',
  },
  stepCopy: {
    flex: 1,
    paddingBottom: 12,
  },
  stepTitle: {
    color: colors.ink,
    fontSize: 12,
    fontWeight: '700',
  },
  stepDescription: {
    color: colors.muted,
    fontSize: 11,
    lineHeight: 17,
    marginTop: 3,
  },
  disclaimer: {
    color: colors.muted,
    fontSize: 11,
    lineHeight: 17,
    textAlign: 'center',
    marginTop: 19,
    paddingHorizontal: 9,
  },
});
