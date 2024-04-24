import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, View, Button } from 'react-native';
import Pdf from 'react-native-pdf';
import DocumentPicker from 'react-native-document-picker';
const PdfView = ({ route, navigation }) => {
    const { pdf } = route.params;
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pdfError, setPdfError] = useState(null);
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
    return (
        <View style={styles.container}>
            {pdf && <Pdf
                trustAllCerts={false}
                fitPolicy={0}
                source={{ uri: decodeURIComponent(pdf[0].fileCopyUri) }}
                onLoadComplete={handleLoadComplete}
                onPageChanged={handlePageChanged}
                onError={handleError}
                onPressLink={handlePressLink}
                style={styles.pdf}
            />}
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

export default PdfView;
