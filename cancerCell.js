const cancerSpread = {
    patientId: "12345",
    primaryTumor: {
      location: "lung",
      size: {
        length: 4.5, // in cm
        width: 3.2, // in cm
        depth: 2.8 // in cm
      },
      stage: "IIIA",
      cellType: "Adenocarcinoma",
      mutations: [
        {
          gene: "EGFR",
          mutationType: "exon 19 deletion",
          mutationFrequency: 35 // percentage of cells affected
        },
        {
          gene: "TP53",
          mutationType: "missense mutation",
          mutationFrequency: 10 // percentage of cells affected
        }
      ],
      growthRate: {
        doublingTime: 120, // in days
        rateOfSpread: "moderate"
      }
    },
    metastases: [
      {
        id: 1,
        location: "liver",
        size: {
          length: 1.5,
          width: 1.0,
          depth: 0.8
        },
        cellType: "Adenocarcinoma",
        mutations: [
          {
            gene: "EGFR",
            mutationType: "exon 19 deletion",
            mutationFrequency: 40
          }
        ],
        growthRate: {
          doublingTime: 100,
          rateOfSpread: "high"
        }
      },
      {
        id: 2,
        location: "brain",
        size: {
          length: 2.0,
          width: 1.5,
          depth: 1.0
        },
        cellType: "Adenocarcinoma",
        mutations: [
          {
            gene: "TP53",
            mutationType: "missense mutation",
            mutationFrequency: 15
          }
        ],
        growthRate: {
          doublingTime: 150,
          rateOfSpread: "slow"
        }
      }
    ],
    treatmentHistory: [
      {
        treatmentType: "chemotherapy",
        drug: "Gefitinib",
        dosage: "250 mg daily",
        startDate: "2023-01-15",
        endDate: "2023-05-15",
        response: "partial remission"
      },
      {
        treatmentType: "radiation",
        target: "brain",
        dosage: "30 Gy over 10 sessions",
        startDate: "2023-06-01",
        endDate: "2023-06-20",
        response: "stable disease"
      }
    ],
    biomarkers: {
      PD_L1: "high",
      ALK: "negative",
      ROS1: "negative"
    },
    overallStatus: {
      prognosis: "guarded",
      performanceStatus: "ECOG 2"
    }
  };
  