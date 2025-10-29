package com.travelmanager.backend.dto;

import lombok.Getter;
import lombok.Setter;

/**
 * 프론트 -> 서버 (찜하기/해제 요청)
 */
@Getter
@Setter
public class FavoriteRequest {
    private String travel_name;
    private String travel_subtitle;
    private String travel_image;

    private String bottom_desc;
    private String hours;
    private String fee;
    private String address;
    private String tip;
    private String link;
}
