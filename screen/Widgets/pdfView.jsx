import React, { useEffect, useState } from 'react';
import { StyleSheet, Dimensions, View, Button } from 'react-native';
import Pdf from 'react-native-pdf';
import DocumentPicker from 'react-native-document-picker';
import FileViewer from "react-native-file-viewer";


export function previewFile(filePath) {
    // console.log(filePath)
    FileViewer.open(filePath[0].fileCopyUri)
      .then(() => {
        console.log('Success');
      })
      .catch(_err => {
        console.log(_err);
      });
  }