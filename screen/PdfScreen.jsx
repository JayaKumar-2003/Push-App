import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, View, Button } from 'react-native';
import Pdf from 'react-native-pdf';
import DocumentPicker from 'react-native-document-picker';
import { previewFile } from './Widgets/pdfView';
const PdfScreen = ({ navigation }) => {
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pdfError, setPdfError] = useState(null);
  const [pdfView, setPdfView] = useState()
  const handleLoadComplete = (numberOfPages, filePath) => {
    setNumberOfPages(numberOfPages);
  };

  const handlePageChanged = (page, numberOfPages) => {
    setCurrentPage(page);
  };

  const handleError = (error) => {
    setPdfError(error);
  };

  const handlePressLink = (uri) => {
    console.log(`Link pressed: ${uri}`);
  };
  const selectDoc = async () => {
    try {
      const doc = await DocumentPicker.pick({
        type: DocumentPicker.types.allFiles, //You can mention all the file types required here
        copyTo: 'cachesDirectory',
      }).then(res => {
        // setPdfView(res);
        // navigation.navigate('PdfView', { pdf: res })
        previewFile(res)
      })

    }
    catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log(err)
      }
      else {
        console.log(err)
      }
    }
  }
  return (
    <View style={styles.container}>
      <Button
        title='Select Document'
        onPress={selectDoc}
      >
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});

export default PdfScreen;
