package org.lanqiao.jd.mapper;

import org.lanqiao.jd.entity.Tea_ClassKey;

public interface Tea_ClassMapper {
    int deleteByPrimaryKey(Tea_ClassKey key);

    int insert(Tea_ClassKey record);

    int insertSelective(Tea_ClassKey record);
}