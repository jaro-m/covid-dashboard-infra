import React, {useState, useEffect } from "react";

import html from 'remark-html';
import {remark} from "remark";
import externalLink from 'remark-external-links';
import moment from 'moment';

import type { ComponentType } from 'react';
import type { BannerType} from "./Banner.types";

