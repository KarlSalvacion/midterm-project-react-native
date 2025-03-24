import { StyleSheet } from 'react-native';

const stylesAppliedJobs = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(245, 245, 245)',
  },
  darkContainer: {
    backgroundColor: 'rgb(18, 18, 18)',
  },
  headerContainer: {
    padding: 20,
    backgroundColor: 'rgb(255, 255, 255)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  darkHeaderContainer: {
    backgroundColor: 'rgb(30, 30, 30)',
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'rgb(51, 51, 51)',
    marginBottom: 4,
  },
  darkTitle: {
    color: 'rgb(255, 255, 255)',
  },
  subtitle: {
    fontSize: 14,
    color: 'rgb(102, 102, 102)',
  },
  darkSubText: {
    color: 'rgb(170, 170, 170)',
  },
  listContainer: {
    padding: 16,
  },
  jobCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  darkJobCard: {
    backgroundColor: 'rgb(30, 30, 30)',
  },
  jobHeader: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  companyLogo: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 12,
  },
  jobInfo: {
    flex: 1,
  },
  jobTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'rgb(51, 51, 51)',
    marginBottom: 4,
  },
  darkText: {
    color: 'rgb(255, 255, 255)',
  },
  companyName: {
    fontSize: 14,
    color: 'rgb(102, 102, 102)',
    marginBottom: 8,
  },
  jobDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  jobType: {
    fontSize: 13,
    color: 'rgb(102, 102, 102)',
  },
  appliedDate: {
    fontSize: 13,
    color: 'rgb(102, 102, 102)',
  },
  applicationStatus: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0, 0, 0, 0.1)',
  },
  statusContainer: {
    backgroundColor: 'rgb(255, 247, 237)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusText: {
    color: 'rgb(234, 88, 12)',
    fontSize: 12,
    fontWeight: '600',
  },
  cancelButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  cancelButtonText: {
    color: 'rgb(220, 38, 38)',
    marginLeft: 4,
    fontSize: 14,
    fontWeight: '500',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  emptyIcon: {
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 16,
    color: 'rgb(102, 102, 102)',
    textAlign: 'center',
  },
  darkEmptyText: {
    color: 'rgb(170, 170, 170)',
  },
});

export default stylesAppliedJobs; 