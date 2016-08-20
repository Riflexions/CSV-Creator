CSV Builder
*****************
*****************
    Features:
    ***********
    1. User must be able to create a sv file by data entry
    2. User must be able to specify the fields of the csv
    3. User must be able to import an existing csv and add to it
    4. User must be able to select form view or table view for data entry
    6. User must be able to view existing data
    7. User must be able to download CSV generated
    
    Structure:
    *************
    ApplicationRoute
        Index
        Creator
            Fields
            Data Entry
            Data View
    
    CSV Utility
    ****************
    Read CSV file from disk and load into memory
    Write in memory data to CSV
    Extract fields from a given csv
    
    
    Unknowns
    ******************
    How to upload a csv on the client side and get values in js
    How to take in memory data and create a file from it for download
    