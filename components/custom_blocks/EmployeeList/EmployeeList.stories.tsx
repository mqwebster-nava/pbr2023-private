import { ComponentStory, ComponentMeta } from '@storybook/react';
import  EmployeeList from './EmployeeList';

export default {
  title: 'Custom Blocks / Employee List',
  component: EmployeeList,
} as ComponentMeta<typeof EmployeeList>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof EmployeeList> = (args) => <EmployeeList {...args} />;
export const Default = Template.bind({});
Default.args = {
    employeeData: [
        {
            "id": "rec0O2oCXra9uSbCv",
            "createdTime": "2022-10-28T14:27:55.000Z",
            "fields": {
                "Name": "Ram Nyasa",
                "Photo": [
                    {
                        "id": "attrFGalgCWm8e4L6",
                        "width": 400,
                        "height": 400,
                        "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/0JMwfvbjeJE40lWjFKab-g/kbZzCirqV6uWFopNc_-b_Hp9_y4fOlzEh3Q6SffCHRpRDYRIXrZiCj8k5NBkpXdGbIQyte0GyXFdIiypmKIouZy5YcL4ImL0jXkBdREFHlg/DPMZ2mo_zdG3XETikDUAoGYZdAEkQdfp3JyjoQlvUmk",
                        "filename": "Ram Nyasa.png",
                        "size": 178407,
                        "type": "image/png",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/U1DLKT6XhPlZ4oRQBcr4_g/Ea2cZbmyudnQBPw1qLcbkd0_5ZJuszFPBpSm5jfm9GYi6UL3Yjt2s33GUe_2h2MSGBwwnDR5KtwgbFMw1IkKiQ/B-WsSYaMEhmgjR1Em4ztNdS2ggu_JkU9vixYWfsMMp4",
                                "width": 36,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/9rcKdWbQyXrL57I746AVSg/ghxPO5lqDQi47lqnMAsGBDtrENzDJ3E8WKm8OuwM8Tr1ilB_ZvCp5njbD3e7iITRJ_HUdDkVYM0c2aI2dt7I0g/e1qHi_KA8JcKmWpUoEwQzf8X-WNAHhPwZZ8VukN1DaE",
                                "width": 400,
                                "height": 400
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/Kgno3v_v8SVgqMUdoOUtuA/Z4eQVuMETTaUsTWcBbVGNmMzpjkmaf6fV_qWRyT2RhVqdrIdnNLNfrMmOruP4wPnWLu4H3RRx8DEgpBGybbQuA/nV-Bga34h4B1A_6O0oJFvU-HKVLB7zc8BkqddukQN9k",
                                "width": 3000,
                                "height": 3000
                            }
                        }
                    }
                ],
                "Department": "Executive",
                "Role": "Senior VP of Program Delivery",
                "linkedIn": "https://www.linkedin.com/in/ram-n/"
            }
        },
        {
            "id": "rec0mEAlSpwWVrV0J",
            "createdTime": "2022-11-02T15:04:09.000Z",
            "fields": {
                "Name": "Andrea Murchie",
                "Department": "Engineering"
            }
        },
        {
            "id": "rec0vfLjHg4xsLUbT",
            "createdTime": "2022-06-06T20:05:17.000Z",
            "fields": {
                "Name": "Michael Sanderson",
                "Department": "Engineering"
            }
        },
        {
            "id": "rec1Xo1TcE8aGS9ln",
            "createdTime": "2022-11-02T15:01:42.000Z",
            "fields": {
                "Name": "Curtis Smith",
                "Department": "Engineering"
            }
        },
        {
            "id": "rec1dd5gD5d987jcj",
            "createdTime": "2022-06-06T20:05:17.000Z",
            "fields": {
                "Name": "Genevieve Gaudet",
                "Photo": [
                    {
                        "id": "atteS8g2quEsTQdYj",
                        "width": 400,
                        "height": 400,
                        "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/lygGjQ55A4ol7KE9o1obTQ/dLO8oh4DiXNhfPkLPzuvUDinV7w5Gvb44Ln6mOuHhcdf0xst9jd7RsSjtHHoO5Ro2UU0Y19zSYnWdMfdgDHyanVpgdsDof7ox7dZs3rYzJue7gX2zGe0UpKe51vr5WHZ/aayVmGgU3JcJ4AKmvhPA71vLoHC2AKtHTUE3mTxCSag",
                        "filename": "Genevieve Gaudet-NAVA130890.jpg",
                        "size": 111234,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/h22qqHpCgH6B62QyLO3mLw/lBWTPm7k-OibMvz9LWERTBzwH6c6y71zPYht7nkysoWxdSZTLb044hGcUJzSDq3F0vLbTOKXQhleqDDiHeoqBA/1eX0ebgK6ez-vRIm79kZw_WtIcbkbdjqIy79t1Ru2ls",
                                "width": 36,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/hkf0hnjkUiuWM0A2x9D6Yg/QyLHrqdRKJgjW8heMyMIIBtRTQBsXr4ZtpJefQiS4oi2XG9EfIi74IV_WkblT2eF67C8wYXTXYwHLkUeIQGMUQ/zU1Wq_c2eaf8zYmYK-ayraDHKGt-QaeH_KDmden-PzM",
                                "width": 400,
                                "height": 400
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/foDakT6Edy1V30M6-ivLGQ/4dybG2zMNN33p2lg_nq5lds9n0xqeDEkL-eAjvS0DBK1vKVmwcLCJsmySWtTxWRDf9ISd-VbL8DSQDcR4jqz1g/IBFj3huN-TKdf27pCy8IbKvkqEBUtojcQXvJXndV184",
                                "width": 3000,
                                "height": 3000
                            }
                        }
                    }
                ],
                "Department": "Design and Research"
            }
        },
        {
            "id": "rec207Qqx2f50POuD",
            "createdTime": "2022-11-08T14:45:36.000Z",
            "fields": {
                "Name": "Chris Kuryak",
                "Photo": [
                    {
                        "id": "attPemAtxEo2idJMm",
                        "width": 400,
                        "height": 400,
                        "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/g8Tm2lfZrPRFxavIcNb0ng/UZPhlbTKQrS768Iip9ATJzGF54RGl3zLqD3dqPGZ1eXTNXmVNEl3yb_TQMDZhv4US2jlQ_kZdGGBFP_GrOWASlvdF3e0TlQl-GkXDqJHmKc/mquGf4RZrblL7CA9LNREFI7u_Axnb72_wE4R5ldtH-s",
                        "filename": "Chris_Kuryak.jpeg",
                        "size": 41515,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/CAaeI0Z6gG-DOqTHp0p6Pw/zmOitwnn5I3Zim8qE8lcXFQ0acluQP_Ygq2XqWuqpEkRXYpY7O2GESxYSUxgjcFgCmo8Qep04oxH9x6e_J4Dlg/5MsQqX6elNqM--RUzNDra3dDY_rhc8dQimRM3W0XBtk",
                                "width": 36,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/EBjoRcozX5yfULyzGmJpBA/qU0Ifv1se1AUkY9KPweF9JCw5jHM-NpCOzj2xcuAPK-sA4_IrWu3A_nz6BpJzzPg1qcNTKGq_CDuusFnJEs4mg/FwPaYVd2pY3-iMbLyfJeO-bOj41V7rIh00WIxgIGCNE",
                                "width": 400,
                                "height": 400
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/YYaeL6ggB4AaRhIjOCCoyw/cTZTdZTVrjnV-XhQlZGepQ7PuOvjeN5vR4jvD8lhw_SD2OWsi4IHgVaV_z1MPZEtp3t2uh5_Bq0CmuEbCNHNDA/o-TkPLPL6RRD7S4YWJ1PbL8JfjyD7qK3dY92qUQrH10",
                                "width": 3000,
                                "height": 3000
                            }
                        }
                    }
                ],
                "Department": "Product"
            }
        },
        {
            "id": "rec2Fa1kqrRsXXAJB",
            "createdTime": "2022-09-21T19:06:13.000Z",
            "fields": {
                "Name": "Sudeepti Bhatnagar",
                "Photo": [
                    {
                        "id": "att6PeIwyCuVZxLGM",
                        "width": 527,
                        "height": 474,
                        "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/P-zz6hgfKbW9X9F7XGlleQ/449RAb11C_iVGuThmWBAl-ho5yfoJrvCTdQtFEZ53yaP7AGfcSV3VdqWExSwnOINiGeDe79r0H-Wt1UbXDdEPEurgqdj0XjoiLjSSkvc1lUzhLUdHeNfrWxZ513z5dAVI4g9hOe_B-8aIpFHDgCUv8y6OI8K5q7wy2ZREUNVW00/nJd0yimjeVEhExWu_9xNRBBRm7ffai75B0A-q81LFZ0",
                        "filename": "Screen_Shot_2022-07-05_at_11_03_17_AM-removebg-preview (1).png",
                        "size": 253621,
                        "type": "image/png",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/lUyGgQFfA198RDbcdRDoUA/QubP15rTpEI6VYSbqFo9MZFKghmnhMUYk0v9FFDRZrz-DJFv67oyQse4AUKLD0TA5iH3REcqhddOrDqccFubHw/yR3sG4eJEgqcuf3rwFeCBOOgqp3K9OzSu4owL9hW7_8",
                                "width": 40,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/i-9pJ8bWe2u3luC86ODPww/SHEaDeTl_O-KaBgqdONHzOcVgs24hqabm00rEucEHRfXlRnSKD732EsTcL-kHM1W-o7rN7olT_KhE0iZ1ijTnQ/YYXWZo9SKHeCquKhpfsXnT6itlThhfxzo2So6I6Z3gs",
                                "width": 527,
                                "height": 474
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/iQZyCVGKoYPuMICrMrVl2A/LtfheejSHcdoF7IspZwpvs3IAseX1qJwiPJk4T8rwMZqqc1qaH4YeYUzcKFaUNd17XOA-w8LV95zJHxfPKhzdA/5_YP44gNnkinSo6G4CzReQyvXQyTDS9cGz7pOCE8rMM",
                                "width": 3000,
                                "height": 3000
                            }
                        }
                    }
                ],
                "Department": "Design and Research"
            }
        },
        {
            "id": "rec2FtpQ4O59NK3oq",
            "createdTime": "2022-06-06T20:05:17.000Z",
            "fields": {
                "Name": "Kimberly Labno",
                "Photo": [
                    {
                        "id": "attMEymTN5FSzKIuu",
                        "width": 400,
                        "height": 400,
                        "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/0xhv_7_tqJUCh1c7tMoxBA/ZKeebzzlZG-yqiWp3dZF9RHWA1PH26rIimyAEnIofJ49UHl6hKgzAR55x_WsqrTpkbE22BY_QTg8uv1fWqBqaR6wKJl-QEumAJujVRPTIckzR4DgsTMVanI8Zk4oIGXh/Y3cpVNfPIZ2X4QdT_uxuToCDR6Y_9N7EfNM-2mjgHvM",
                        "filename": "Kimberly Labno-NAVA131142.jpg",
                        "size": 189628,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/XP8ZwuW266WeTR7LG8NPqw/DgY1gKUUbbXxk5Xq_Kvi_2rISibIPUwOkMT7t_rcoRtUrKUprGHdWwoSz44InoFiJZEJhtiB0O5t0bQy0W1oog/g9K9x_nUCqeui5aiRl5QZ2cQZ_EjcxRJ_uH55dJ9GUU",
                                "width": 36,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/gQQaP1PyoQxYJBzBRDVxcQ/kqtoQaHN9oFTwDYt7xKD5Ns0LFdD37QJ0Yh274nm3AW8sIcroZ1k3H8M6DxEHiRJuBAqKZSj5FLaiQSs5nOPOg/EgC-ZjbAHzdjFnmKynIXJ6OKL5vKzR6bFgmtrgU7Q8k",
                                "width": 400,
                                "height": 400
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/bXTibu5PR0Y1KiGBFp-msg/lDptf8AmXMoSyt4j53CtDhA6DtEjGY0vAiY9O8tgyHPleA2T8TKuDmvMR6t1ffIMfKAQwi9lWWuuIKmROMmoag/UxyAJB2y7wwltqDrv5J66h-KHScYrb16OZYnzGNSkeQ",
                                "width": 3000,
                                "height": 3000
                            }
                        }
                    }
                ],
                "Department": "Program Delivery"
            }
        },
        {
            "id": "rec2KimSzWZjpIzws",
            "createdTime": "2022-06-06T20:05:17.000Z",
            "fields": {
                "Name": "Tomas Apodaca",
                "Photo": [
                    {
                        "id": "attjwwSe9KqsIPiY6",
                        "width": 192,
                        "height": 192,
                        "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/d3ULeoapoV2rDG_wNqt79Q/hemPs1m1VDhSFp6ey4nVLsfut9jv7uHSgSxGCdkWJZTo1fZVVIq7VUM2TVxwebKkKo33YnmjDXURHU37A6JrbGiae6JF6qiS-zfFC_Qyt7o/1NHio_WulpIAfhsKwSSgJzFWvwM6yDQcUz-N7h7PiUo",
                        "filename": "team-tomas.jpg",
                        "size": 12306,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/jjcV8WpNk2oy82ZXyBLOww/oxxsA4-N_ELRSygxrgsYa2twxFIgswRpfSsJo0vE_bFf31zCRk8jB2qNXjDrHP8MWqYTLgS70CjY1rvngPyCYw/vx3LzvSrUraAuFCf4o_9UMshCjpFFS7hqQwLWEdT4mE",
                                "width": 36,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/N6G0OEd4Ug7tqqByetcHaQ/g0bKF5Fb5jWEjPzuxOm4qIZRnPucK8Wa5nCom-xNULV3IcH23ndqCrEZbt5idNiqLKaKLHO0aAMZQQYqdNUJAg/tGlTn0vizADM3F7xu1DJ-PSFjEsc4KiBfYlZpSbHxgo",
                                "width": 192,
                                "height": 192
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/6FypmeqidKrEiBYcbLNo6Q/OPbKzrhAe2KCiEZ75LeITly13iyna3WbWacEScJCo5_SCNb7e48o6vRdNLQHvgcrhInxZcKQ1Ej7c-VyZVU00g/KX11DqXjAxx5AQoLi5fkPMj2EJ8liZl68TvscEOi2lc",
                                "width": 3000,
                                "height": 3000
                            }
                        }
                    }
                ],
                "Department": "Engineering"
            }
        },
        {
            "id": "rec2Y0FagCrq8Yzm3",
            "createdTime": "2022-06-06T20:05:17.000Z",
            "fields": {
                "Name": "Harlan Weber",
                "Department": "Design and Research"
            }
        },
        {
            "id": "rec2vvjMw2r9LsXJi",
            "createdTime": "2022-06-06T20:05:17.000Z",
            "fields": {
                "Name": "Charlie Cheng",
                "Photo": [
                    {
                        "id": "attkVZmOIruVAs71Y",
                        "width": 200,
                        "height": 200,
                        "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/gMJQAepMAiBDz-W-uRm_Dw/JzcT165_AD0cIHca5T1M0EVlgYn0zcXuNchRI5mnt8G_K-y5eZZVvJLYfa0o3vFEW-Mvyq_R0HA3K02YIa_MBylV6H1p9hYzOFuzttyOGvI/I66ncW9228ycqqv4dvICt6P6yI6snPF73LXVxh9R7Uw",
                        "filename": "C.Cheng.png",
                        "size": 53502,
                        "type": "image/png",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/X48mG0Y8dfhHTkSyRO1b8Q/x4QDw2AiZF7jieXXkQea-v6SEjI8XWZ-ttgAtjQ60bDKQxcb0-blF7ahWuIuDbRybGpXfTJtppwppgGVQCD57Q/kQJ9kUcqpg2MSTTFfnTJYMopSwYzKUwhoXwG-7mVHOQ",
                                "width": 36,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/Fg6uCmti-9JretfDXgZMVA/YFSEMDAIqVSzF5ZxglmcicFFXiHYouQgFVpKgBEfV1MUeYdnZ3z0f0MHKNXYi9DseZSihsZ0ZZIb1sTc4TgQmw/GVaTAb94isjqzXgctr0WnZUxuG3ZE3QMuWpR38O-9Lw",
                                "width": 200,
                                "height": 200
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/KEZLVFzTTpYjI2aGqfMyOA/uvnmM_YfzWUC-IqsnwS9kKUsGedUzDOiOotyIt4rTb5he6HVLU9K2SCNi5XK_Y84fj-fMoiwIFbJJ32EzYcUlQ/uOI5GSvslPxQ6-AVe-asACNw1rxJpu2I-dxOgGBbSgg",
                                "width": 3000,
                                "height": 3000
                            }
                        }
                    }
                ],
                "Department": "Engineering",
                "Notes": "Have a Connie Cheng"
            }
        },
        {
            "id": "rec33pYzKP3m7r0ML",
            "createdTime": "2022-06-06T20:05:17.000Z",
            "fields": {
                "Name": "Ivana Ng",
                "Photo": [
                    {
                        "id": "att8Dwai1ibyLUyBi",
                        "width": 601,
                        "height": 600,
                        "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/q1aZIOu8R_7PDyBCK_SyIA/GQMlPmb7aPUQHXZLvEfuZ4e3Yb1DURgkjCybIPjUf1FCIslJLM6_d87E0kFD0vrvy98Rekxs14GuuDpzbCdVS_aKnq3OsvfNjdVGTKKJ-po/07ln7Zr-MFIJrzE3VCtIMP6jk0h_mh-6k-dk7MO82hc",
                        "filename": "Ivana Ng-NAVA131120.png",
                        "size": 220615,
                        "type": "image/png",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/mShyaWTbkK-av_KxahxZKg/VmIbGp4aEPA-WnM84WJaZEkAvwPXF-LxfyQjcqrf3z8kaI-T4vsPdC9Yx4kze0KcumtVQWBFbbnIajX_tRKoyQ/_u58O7v8-POkCLT1qlFBqfSVY-3gIbb8agnx_-OIO_A",
                                "width": 36,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/SWwMJ3fsZPf9t9JR1f-QHA/B_TC4RAYDcCXUGcpb7jOmhUeqtG4uvpdBpmgnAGI2B721CjH71458lCAyMesVR7q0FKh5tBEf01XWCJx5BOBGg/qdWTJBoyPNffVgIGsIy7fY9Zo2wOl-nFhEJmm6Y4ZC8",
                                "width": 513,
                                "height": 512
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/Mf0HFRYOCqpZb1gZcACeHQ/-e_Ib03zBim8Oj1lCGFZf_U-rVFj_U6FpAWCaCAnSqR6s1nt_vZXcgye-HCqTjQ_eS7gU8LOXmRoAUe5--3MBw/LZV1r4CFOBKKXqH1G6-ltoQcfouvzf0a55sJawFChS4",
                                "width": 3000,
                                "height": 3000
                            }
                        }
                    }
                ],
                "Department": "Executive",
                "Role": "VP of Product",
                "linkedIn": "https://www.linkedin.com/in/ngivana"
            }
        },
        {
            "id": "rec3M9Z5TEwHt4TGx",
            "createdTime": "2022-06-06T20:05:17.000Z",
            "fields": {
                "Name": "Alicia Benish",
                "Photo": [
                    {
                        "id": "atti0aeMwAgQlpzn7",
                        "width": 200,
                        "height": 200,
                        "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/8cY6lezZfJENjw7t-joUUQ/UubJ-d96BEbrX4WU7u29di_jpJoxgcN7zoOXSU0vZuMPN9dGyvYV-0Nfim5kavfywkp30lO4ran0_tKOCH3cIdKTj4T5AEcsCyIdRAzXeNE/0US-m6yJi3SgdGZzJ6AH_0pgSEIQW7S52-pty6BYYg0",
                        "filename": "Alicia%20Benish.jpeg",
                        "size": 21145,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/Q4Rl4h9mVFYKHm7hLq_u_w/_Pn4i2nw75FvLfB5f2E0PuxN8RTPgehBcneyyswbkk6Ek5rxoJ_KcMWO2hNla1Ymj-_6r05x4J2HfQvKnzFawA/RBcE2SkBy14IVICnXGT1gNYi0shgaGHC8QT0cMpGs-w",
                                "width": 36,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/dJ9MEHxYi44__jHv8A1U7w/-Xd6zcCHRC8JqpvMuzjjL6hbe3yzYLwgFx68ueyqkBQph7yFuRa2TgySmdxI7q6GgJ5jfPW8qpKiWL03_AA7Jw/C2oxlRRooJhbpT915QW7Ased_RcPxlkJa_PKrCrKHvU",
                                "width": 200,
                                "height": 200
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/cCLXuVVEqdro1mhupm1jmg/0eSn50kosHfnhOn_-dblzobelqkKypKIllXqMwnuTrTTcS3_cLBXBw2ZmIvbMr2_WFUonG2xTGYcZjv5P_O3Sw/nF1YKfLNP9GMUFrEzsPHFusif5RYpkSaCRO-MHHIfiU",
                                "width": 3000,
                                "height": 3000
                            }
                        }
                    }
                ],
                "Department": "Business Development"
            }
        },
        {
            "id": "rec3h9xUD97dOdi0h",
            "createdTime": "2022-06-06T20:05:17.000Z",
            "fields": {
                "Name": "Josh Long",
                "Photo": [
                    {
                        "id": "attay8KVydJlMuTmC",
                        "width": 400,
                        "height": 400,
                        "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/-W0Zhg9E4FWpbtE7cFYjGw/fqvdyouB7bp2E5YWplNR5TgmIpJvoMUSbigHvTX6yjV8nPQdlNiXXo9UhSCfUdEtVy6-vrJ31Nub0bYhGdY2bmwDV_Ls0irfwJShLEzDLtw/KOK4tjjeZNtEhEvW9vKbPuvE6_-Iuh6TKvwzVfp_nyQ",
                        "filename": "J.LONG.jpeg",
                        "size": 65033,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/VEMbjpZAG1HKlZuSX0MAMg/eBmjmSs1obq7DtwbN_YaL_2bwdSlQSW7MMm9u31g8YMKI6L9tNhUaVvTJNbuKfBA9KALHMKjDSV8vqZSQh3hPA/8tW5bP5-XxlVspFGj1J5ZkPhVRomcxIDh9rY59kIahw",
                                "width": 36,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/APJLflnsxXRUR9VJuckJNg/tFLTUY29PEEDJHK37jiaU0ZTh3GlFv6VQCqsUTwTheu7nfEO51VJcghb1n-qwJaoH4nKB16pR3rBEl_bxPMQ-g/UMYEqAPscCblgKVTKu4Nr5aRtaSukRDLG4bhaKErJ50",
                                "width": 400,
                                "height": 400
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/NOqRJZGZdKEXS7ef3ZxsUg/-AIhMiixSxovo_9lMAdbtv74lgecDX4_PDDSKIuMOoxO0Q2hNKlj8BAH7uOOnMy-Z9QS26szfcSwsnnnmNgXlQ/Yirnbq843aI0k0Jn24XEMtdMSfYFXCEQEaSJ2ckgoH8",
                                "width": 3000,
                                "height": 3000
                            }
                        }
                    }
                ],
                "Department": "Engineering"
            }
        },
        {
            "id": "rec3ht6NPTTU1iSM2",
            "createdTime": "2022-06-06T20:05:17.000Z",
            "fields": {
                "Name": "Oscar Ramirez",
                "Photo": [
                    {
                        "id": "attNv8nzjqiyT2Z8R",
                        "width": 400,
                        "height": 400,
                        "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/0TOILmL890BgTxvkxmN9-A/7fTvKfsF0Gb6nNWRO-kP7L12lMZj2sgymSqmtILjr7V8gKEboyjKIxanGhotYfPPZbQMLFZPnqQ1LUXXDGHdEyRCzxeqxF-VFGROAtt4DeNSIp5EpEUGtNb24IGS-vpk/R8vhqPjquoygYpFzIDpuyQGjg0YbFi-wMn1P3yXyey8",
                        "filename": "Oscar Ramirez-NAVA130412.jpg",
                        "size": 94653,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/e4AAa7EpJIaL6rlVnm-SLg/cpxCF10ZaIGSD1WKIjfj0049s_seNi3QltPb8mlNGRIk0go_WxxQcv-47FgXZBpX2cd-Ii9q7dHcsccmOSpGGg/ky8bSAUR4GEhPbWJZB4jujsKXUm189S57Ngo14DDIfo",
                                "width": 36,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/HhpRxzdOebNP5QcacAs-nQ/YgjHJPiFSaJ7q1oGbVojqRpHEjyEKwsqlG0BP-P-sOtXCIJ3N_e1Vtp13kFezUZBHVxqiGt1yO4X4nyeR7ny_Q/6DC8NG2U8cvLswu7TOr3UcG2EJnFFK2Mh67qyYFvaQE",
                                "width": 400,
                                "height": 400
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/DLQ0TI6am2SxESFG9i-PCw/1-IPt_VoZNXLGnCXYrDHnIZTgCz61rnowFp2He3Mcpbv87UvWfPC3Ew4nbFTKE-VZHGgHTdhDUqWH65hK_MEYQ/6sOozGRkbFarmHJnjC4BSbT52nAtA-wFOtKqIiS40vs",
                                "width": 3000,
                                "height": 3000
                            }
                        }
                    }
                ],
                "Department": "Engineering"
            }
        },
        {
            "id": "rec4QGwgkOtvFPSbH",
            "createdTime": "2022-06-06T20:05:17.000Z",
            "fields": {
                "Name": "Makaela Stephens",
                "Photo": [
                    {
                        "id": "attbr8IULxqn5UvcS",
                        "width": 192,
                        "height": 192,
                        "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/0rmPxJu8rtqjCX6PmROcZA/kgZw8Bt4WwEeuUW4oju8VxdM2JBXrYg6IlNAbE_32hF7lEY4rNigB6XHV4Q-JjCpFSosgQMhr2bekQMAYGY1C1VerxBrHT7z4iB6f9QGIX0/x8UOcwjhtt_wknyM5o0yL9TDdYLHvHlHrtBHyXs0Dho",
                        "filename": "team-makaela.jpg",
                        "size": 6148,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/irmVTMjKmwNTMAU304iFTQ/bG5OsMsEqvyKl_wNjAt_WnGfeF0RnsjhDkU-RG-RqucbTAnnyMVSD06mvOs108u9rvm9eEdmIi_GsXzHgXV1fw/pVTXpkFpCw6hp0L7h0LmBSKl0R2HmNTyYtHXbyqeCgg",
                                "width": 36,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/Y-K-Y-FFIvt2yVRmVNfhEQ/EJv8EunCLQM4PMNpbrfUiuooqzHRBMmI3aLilR9K7Lew0Hc-pMPzQUOKiBCYoqD3sfE6J1i7G_mxry7Fon6ZYw/qwZUe_WA2vQS9MJzBFqDN1aNHRQvN_QXBiUsyuHR5ik",
                                "width": 192,
                                "height": 192
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/d1_eBbjMeQEEhSqkKjCbdQ/7TKkK8kmoKVB7gSzDCrTACJPpIHBZqTBraxnNVHJkV3dDZgN9T7TDv7akhgayEmZgU4nQY-l4ty1Nfyht3H_dA/uW6TEAO_GEpcvhWl3CDVahRsuJab_iimWFEHpoEdEUE",
                                "width": 3000,
                                "height": 3000
                            }
                        }
                    }
                ],
                "Department": "Design and Research"
            }
        },
        {
            "id": "rec5FU57Jv2iVLETH",
            "createdTime": "2022-06-06T20:05:17.000Z",
            "fields": {
                "Name": "Eliana Lazareno",
                "Photo": [
                    {
                        "id": "att7F9jcb2amdPqhO",
                        "width": 400,
                        "height": 400,
                        "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/GS42_TBfgKwafcNlMCzpdw/4HSft6dMCjWvbMasFdATkbEwUaBANQ8QHGSjI7am4oyh5Ahep8b9ZeVuqyW8acSTcyuLk_YwQ6BkuCttDHUkKzp3qZ1Gh99a-S_x3dkCffTw6oLTLBW8fEQUnNHmcefg/Pb-NvTjpIrwLamGu9Mo8W3d_t6V2ZJPHejf7ych44Pk",
                        "filename": "Eliana Lazareno-NAVA131249.jpg",
                        "size": 115189,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/9BqTnwZd-YulOJogwPReOA/3ZWoRQCR87wuNieEZ_rKSTIQCwRyP2L6wAZabV-jJ8sLI5WzSOyRo8dHxu2g97BgHSRDMcTtOYlMiW7QYY6Pew/paDr_WibCcSASvWKfAXX0859HtIQ0Ur3OVUtV5isV9Y",
                                "width": 36,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/m4W9_NrH9ZjG9R_dsyuZhQ/75O7yOc5-5hxfPJ-DVsGn1kzMgApWNwEJJEaYnmMjr8-RKq4NMUIcGNCnJzPv_341ovaiQUtLAPH3sZUysCXPg/HX7EMkZCPIFxBMq_Wb6YRCRUk-zPru6pwygnUuFPvdQ",
                                "width": 400,
                                "height": 400
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/a9siGJzVPDocTpbCWWrwuQ/8Vcj8VZ7ad_pcAqTfHxyt1qvhp7QqB13CQP8JwLEBIiGuLqdfYS24GW37DrkMuQq8dmFo8l9ku02s7eH3tt4ng/PtYJhpIZh9L4xLlALC-BD1hx9kHXh-eSH4PAEW8t40w",
                                "width": 3000,
                                "height": 3000
                            }
                        }
                    }
                ],
                "Department": "Recruiting"
            }
        },
        {
            "id": "rec5iXs5waVnd4BJQ",
            "createdTime": "2022-06-06T20:05:17.000Z",
            "fields": {
                "Name": "Charity True",
                "Photo": [
                    {
                        "id": "attMOQ6SqTeEAOMfG",
                        "width": 400,
                        "height": 400,
                        "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/dXThwG_xD67Ia61BL1cC3A/6lA3CgHF833zj-FpLmaeoqouuh3731LG4EL0McUJyPnv08wAdFxutNkEZA2jRtXA1U3UZxRWghA5N1ga16s9L-1QKtKrktCJ0OS8A-T68TrMO1cz0x4nq5v4cpFPog-8/-ft2ouwLfxhAqfiHC57K7Yd6sIzhX9QY8eMVOpfg3a0",
                        "filename": "Charity True-NAVA131419.jpg",
                        "size": 128119,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/bWX7xfNWlIubbrEQIxsd2g/znJY5VH84ExelR7mg2oGa5ugpZiVqX42w0hU8_uj8LTcLxRLDyCGkHxlPPFEucvN_nCllROyg9f0Dh8T4dIXdA/C_q1CLXFktZYEP41U-J3u0CzMYtARL6pOwzY88gWtso",
                                "width": 36,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/XKVLlFZECoL9kzlm4ITXtg/nHYPUITjUJd174FUjWvJljG4olg9RIO2ibuDXWkpd3DWXPFNqxOW_WtExQQJ1a6d6xuQOJuQxCO8FrfLQtbqZQ/Yt2PWikp9vRlk--ixuLjAnm6G0snlBevLBr-pHNndEo",
                                "width": 400,
                                "height": 400
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/fdbW15kGQImdIM0GJRjFBg/p-Q02vXCBY_6sJqI3HR9zLX1gxZ6WsSOGfWB7vHBswYrZRG3K8TKSZI--MVw6PBY_ApbuH8GH2qwqnV6IjhWFQ/qqSh2akEowa08kMvV2S6EN6Kwr7vfBuuJd5eQDAr1jc",
                                "width": 3000,
                                "height": 3000
                            }
                        }
                    }
                ],
                "Department": "People Operations",
                "Notes": "Charity Miller in Employee data"
            }
        },
        {
            "id": "rec5nC3bdnyljorm6",
            "createdTime": "2022-06-06T20:05:17.000Z",
            "fields": {
                "Name": "Michelle Thong",
                "Photo": [
                    {
                        "id": "attg2YFuamkKwCNHI",
                        "width": 400,
                        "height": 400,
                        "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/0Pui9m_iLi6UjKhQxmbEeQ/Zmyo7ujFnCxt3Kid6UvJ_GHeRnkaflLMxCV-mYUSyWcHK3BkA79grxeseLLGGcsYl2l8Rrzx2n3ynEoqsZKSj8JUFP6eImpFKM6dO1KdqgQiOUEMw6UfrnOcxx04suc8/Vk4rUJVCTq2wRVjoLEtcsxnokzAoE4AudUSyfOtmBgw",
                        "filename": "Michelle Thong-NAVA130871.jpg",
                        "size": 95636,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/o6V692LfI7uvUhlzwfensA/ZMmRE8QD8CxqrrlVFrTkeXKgpuhAfUksEmF5F5x5YsM-dLkSOhm1b1zHXiV4jGCBIt5s0oUCJSelm6i6PzRcwA/3QlPtI2jiXw03l861bK_3wUqY1QPTCXeDasl1aD3ywE",
                                "width": 36,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/a_IiGQHEWDYdx7ytKnHS5g/q6aOxwISm9MN8UKjiTdb-rHLD4iJneyyp9cwKVK6BatixnmD9TCmkN3H2t-_iCZnqqRi7CI1SMwtoRuVkdmeYA/1LhYugNO_Q5OtLLMm7SPF0gwRxXFy5i21OlPgDZNbyY",
                                "width": 400,
                                "height": 400
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/8MD4iPBf4L6CahYcR7gM7g/iS8dQ5jmDrnfXgJhRut6k0enlCWsE88oPFvYVOD92ChHzBw8bw5xX6BNBo6_oa2XhZBvzffPwpG-e-gDpALFRQ/om5k1cil93gxtiuEJV3ACJLEEni-AE5zZghbU7a6bF8",
                                "width": 3000,
                                "height": 3000
                            }
                        }
                    }
                ],
                "Department": "Product"
            }
        },
        {
            "id": "rec5zCxoy7ddlT3fO",
            "createdTime": "2022-06-06T20:05:17.000Z",
            "fields": {
                "Name": "Kelsey Willard",
                "Photo": [
                    {
                        "id": "attihtbbgDx6pOWE1",
                        "width": 200,
                        "height": 200,
                        "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/a71LNq09tXdiUFK6vBkQWA/Wq4iyJ9xNX_fpaa0y3Tu8uVAg8SCjHJg3fxzgKsS6EJQtUldwU5P26P8kc4pl1Pdf-r55IHGwZUHKPupfiy7k-cgm_5Fs0VbHZ7cpmJbyuE/FxXucr711oasnGKi_IUOH2qG1q62HDJB0yNgeiHkwYI",
                        "filename": "Kelsey%20Willard.jpeg",
                        "size": 17102,
                        "type": "image/jpeg",
                        "thumbnails": {
                            "small": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/sVFKZMhbRKRhm_26PJ8khA/t3mrl5XGdbGhm9-nZXSK2enLfkTb04OY9k3Zxp0kncs1yYwEWTo-CY7bsl8o976fYDpMr1ir_TG0VO8prDFvAQ/tqAjo1V14FZxlC-_nf3mTBFq3-_5r_puIivlr2usWVQ",
                                "width": 36,
                                "height": 36
                            },
                            "large": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/ExbtkpCucfa14PorcoHuKQ/vSrFpsi9W82ezT1xYI-5e5MVVipRL93mMEBrFvu_zzdRpkSSlJGC0PTXMBBB5d2_C5xHQYN-rbkIqacvRPQN-A/tjhkJP7k9SHRRIf12h5CMzYZGffG6Q8hMb1keu6WxbY",
                                "width": 200,
                                "height": 200
                            },
                            "full": {
                                "url": "https://v5.airtableusercontent.com/v1/10/10/1668110400000/lxuG__q5KU0AT7Q5nBc5Gw/M1_mNuEb-W-YaPe989peSwwI_R1_IwHy5_ZgNPToWQpUk2jZOzMr115HOYw6dI5MvN7yGl-W1VMDkU1-jdrSbg/CAmYNQkdeG4KmxUXdPydgjr_3YRYKAIWO2Pr8I8tz-U",
                                "width": 3000,
                                "height": 3000
                            }
                        }
                    }
                ],
                "Department": "Design and Research"
            }
        }
    ]
};