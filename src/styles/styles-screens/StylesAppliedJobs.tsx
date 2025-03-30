import { StyleSheet } from 'react-native';

const stylesAppliedJobs = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(250, 250, 250)',
  },
  darkContainer: {
    backgroundColor: 'rgb(18, 18, 18)',
  },
  headerContainer: {
    height: 70,
    width: '100%',
    padding: 20,
    backgroundColor: 'rgb(20, 71, 142)',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(221, 221, 221)',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  darkHeaderContainer: {
    backgroundColor: 'rgb(26, 26, 26)',
    borderBottomColor: 'rgb(41, 41, 41)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'rgb(255, 255, 255)',
    marginBottom: 4,
  },
  darkTitle: {
    color: 'rgb(255, 255, 255)',
  },

  appliedJobsAmountText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(255, 255, 255)',
    marginLeft: 5,
    textAlign: 'center',
  },

  darkAppliedJobsAmountText: {
    color: 'rgb(255, 255, 255)',
  },

  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'rgb(255, 255, 255)',
  },
  darkSubText: {
    color: 'rgb(231, 231, 231)',
  },
  listContainer: {
    padding: 16,
  },
  jobCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgb(229, 229, 229)',
    marginBottom: 16,
    padding: 16,
    shadowColor: 'rgb(190, 190, 190)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  darkJobCard: {
    backgroundColor: 'rgb(30, 30, 30)',
    borderColor: 'rgb(66, 66, 67)',
    shadowColor: 'rgb(0, 0, 0)',
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
    borderTopColor: 'rgb(229, 229, 229)',
  },
  darkApplicationStatus:{
    borderTopColor: 'rgb(40, 40, 40)',
  },

  statusContainer: {
    backgroundColor: 'rgb(255, 247, 237)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },

  darkStatusContainer: {
    backgroundColor: 'rgb(224, 209, 196)',
  },
  
  statusText: {
    color: 'rgb(234, 88, 12)',
    fontSize: 12,
    fontWeight: '600',
  },

  darkStatusText: {
    color: 'rgb(220, 18, 0)',
  },
  
  cancelButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgb(237, 52, 52)',
  },
  darkCancelButton: {
    borderColor: 'rgb(220, 18, 0)',
  },

  buttonPressed: {
    opacity: 0.7,
    backgroundColor: 'rgba(255, 12, 28, 0.08)',
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
    alignSelf: 'center',
    padding: 24,
  },
  emptyIcon: {
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 16,
    color: 'rgb(102, 102, 102)',
    textAlign: 'center',
  },
  darkEmptyText: {
    color: 'rgb(156, 163, 175)',
  },
});

export default stylesAppliedJobs; 